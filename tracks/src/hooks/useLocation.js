import { useState, useEffect } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          //we get location implicit from expo-location
          callback
        );

        if (!granted) {
          throw new Error("Location permission not granted");
        }
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      //stop track the map
      if (subscriber) {
        subscriber.remove();
        subscriber = null;
      }
    }
    //clean useEffect
    return () => {
      if (subscriber) {
        //stop track the map
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
