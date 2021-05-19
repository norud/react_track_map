import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import { Provider as Authprovider } from "./src/context/AuthContext";
import { setNavigator } from "./src/NavigationRef";
import OnRunAppScreen from "./src/screens/OnRunAppScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";

const switchNavigator = createSwitchNavigator({
  OnRunAppScreen: OnRunAppScreen, //to not show sign up || sign in screen
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    SignIn: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <Authprovider>
        {
          //is hook to handle the ref to navigation
        }
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </Authprovider>
    </LocationProvider>
  );
};
