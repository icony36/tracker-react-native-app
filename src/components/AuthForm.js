import React, { useState } from "react";
import { NavigationEvents } from "react-navigation";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({
  errMsg,
  headerText,
  onSubmit,
  submitBtnText,
  clearErrMsg
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavigationEvents onWillFocus={clearErrMsg} />
      <Spacer>
        <Text style={styles.title} h3>
          {headerText}
        </Text>
        {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          autoCompleteType="off"
          textContentType="none"
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          keyboardType="visible-password"
          autoCompleteType="off"
          textContentType="none"
        />
      </Spacer>
      <Spacer>
        <Button
          title={submitBtnText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 32
  },
  errMsg: {
    fontSize: 16,
    color: "red",
    marginTop: 16
  }
});

export default AuthForm;
