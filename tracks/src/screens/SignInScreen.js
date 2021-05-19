import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  //state object
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {
        //NavigationEvents render again
      }
      <NavigationEvents
        //onWillFocus={() => {}}
        //onDidFocus={() => {}}
        //onblur means when leaves the screen(navigate away)
        onWillFocus={clearErrorMessage} //both way are ok {() => {clearErrorMessage()}}
        //onDidBlur={() => {}}
      />
      <AuthForm
        headertext="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtontext="Sign In"
        onSubmit={signin} //iquial {({ email, password }) => signin(email, password)}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign Up instead"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 245,
  },
});

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignInScreen;
