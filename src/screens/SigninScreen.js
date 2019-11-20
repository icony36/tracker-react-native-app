import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import KeyboardViewContainer from "../components/KeyboardViewContainer";

const SigninScreen = () => {
  const { state, signin, clearErrMsg } = useContext(AuthContext);

  return (
    <KeyboardViewContainer>
      <View style={styles.container}>
        <AuthForm
          headerText="Sign In for Tracker"
          errMsg={state.errMsg}
          submitBtnText="Sign In"
          onSubmit={signin}
          clearErrMsg={clearErrMsg}
        />
        <NavLink
          routeName="Signup"
          text="Don't have an account? Sign up instead!"
        />
      </View>
    </KeyboardViewContainer>
  );
};

SigninScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  }
});

export default SigninScreen;
