import createDataContext from "./CreateDataContext";
import trackerApi from "../api/Tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../NavigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

//check signin if already have a token in AsyncStorage
const autoSigninIfHaveToken = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    //pass to the reducer
    dispatch({ type: "signin", payload: token });
    //navigate to main flow will be better
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const clearErrorMessage = (dispatch) => () => {
  //pass to the reducer
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      //pass to the reducer
      dispatch({ type: "signin", payload: response.data.token });

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
  return async ({ email, password }) => {
    //make api request to signin with that email & password
    try {
      //if we signin, modify our state and that we are authenticated
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      //pass to the reducer
      dispatch({ type: "signin", payload: response.data.token });
      //navigate to main flow will be better
      navigate("TrackList");
    } catch (error) {
      //if signng  up fails, we probably need to reflect an error message somewhere
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    //pass to the reducer
    dispatch({ type: "signout" });
    navigate("loginFlow");
  };
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, autoSigninIfHaveToken }, //to make enable on different screen
  { token: null, errorMessage: "" }
);
