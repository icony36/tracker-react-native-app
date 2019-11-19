import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errMsg: "", token: action.payload };
    case "signout":
      return { errMsg: "", token: null };
    case "add_err":
      return { ...state, errMsg: action.payload };
    case "clear_err_msg":
      return { ...state, errMsg: "" };
    default:
      return state;
  }
};

const clearErrMsg = dispatch => () => {
  dispatch({ type: "clear_err_msg" });
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackCreate");
  } else {
    navigate("Signup");
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", res.data.token);
    dispatch({ type: "signin", payload: res.data.token });
    navigate("TrackCreate");
  } catch (err) {
    dispatch({
      type: "add_err",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", res.data.token);
    dispatch({ type: "signin", payload: res.data.token });
    navigate("TrackCreate");
  } catch (err) {
    dispatch({
      type: "add_err",
      payload: "Something went wrong with sign in"
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrMsg, tryLocalSignin },
  { token: null, errMsg: "" }
);
