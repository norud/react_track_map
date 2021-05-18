import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <Button
        title="Track Detail"
        onPress={() => {
          navigation.navigate("TrackDetail");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
