import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  initialLocation = {
    longitude: -82.796175, //-122.0312186,
    latitude: 9.653744, //37.33233141,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation, //currentLocation.coords,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={200}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      ></Circle>
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: 374,
  },
});

export default Map;
