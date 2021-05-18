import { NavigationActions } from "react-navigation";

let navigator;
//to make enable navigation on all comppents
export const setNavigator = (nav) => {
  navigator = nav;
};
//to pass the link(url me create on app, like sigin...)
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName, //also we can set like: routeName: routeName
      params,
    })
  );
};
