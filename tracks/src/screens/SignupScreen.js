import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        //onWillFocus={() => {}}
        //onDidFocus={() => {}}
        //onblur means when leaves the screen(navigate away)
        onWillFocus={clearErrorMessage} //both way are ok {() => {clearErrorMessage()}}
        //onDidBlur={() => {}}
      />
      <AuthForm
        headertext="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtontext="Sign Up"
        onSubmit={signup} //iquial {({ email, password }) => signup(email, password)}
      />
      <NavLink
        routeName="SignIn"
        text="Already have an account? Sign instead"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 245,
  },
});

export default SignupScreen;
