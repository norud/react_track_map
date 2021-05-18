import createDataContext from "./CreateDataContext";
import trackerApi from "../api/Tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../NavigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      //navigate to main flow will be better
      navigate("TrackList");
      //await AsyncStorage.getItem("token");//if we want to get the token
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //make api request to signin with that email & password
    //if we signin, modify our state and that we are authenticated
    //if signng  up fails, we probably need to reflect an error message somewhere
  };
};

const signout = (dispatch) => {
  return () => {};
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout }, //to make enable on different screen
  { token: null, errorMessage: "" }
);
