import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Sign In Screen</Text>
      <Button
        title="SignUp"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignInScreen;
