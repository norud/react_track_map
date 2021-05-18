import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Spacer = ({ children }) => {
  return <View style={styles.Spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  Spacer: {
    margin: 15,
  },
});

export default Spacer;
