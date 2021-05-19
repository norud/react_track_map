import "../_mockLocation"; //for fake location
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation"; //another way to give margin on top
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  //this solve te issue with useEffect
  //useEffect render just one time, thats way alway we have recording false
  //calback rerender if the date change
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create Track</Text>
      <Map />

      {err ? (
        <Text style={styles.err}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  err: {
    margin: 10,
    color: "red",
    fontSize: 18,
  },
});

export default withNavigationFocus(TrackCreateScreen);
