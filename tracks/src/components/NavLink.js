import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-elements";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 18,
  },
});

export default withNavigation(NavLink);
