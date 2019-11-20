import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import KeyboardViewContainer from "../components/KeyboardViewContainer";

const SignupScreen = () => {
  const { state, signup, clearErrMsg } = useContext(AuthContext);

  return (
    <KeyboardViewContainer>
      <View style={styles.container}>
        <AuthForm
          headerText="Sign Up for Tracker"
          errMsg={state.errMsg}
          submitBtnText="Sign Up"
          onSubmit={signup}
          clearErrMsg={clearErrMsg}
        />
        <NavLink
          routeName="Signin"
          text="Already have an account? Sign in instead!"
        />
      </View>
    </KeyboardViewContainer>
  );
};

SignupScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  }
});

export default SignupScreen;
