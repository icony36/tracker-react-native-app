import React, { useContext } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Spacer>
        <Text h3>Account</Text>
      </Spacer>
      <View style={styles.btnContainer}>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 100
  }
});

export default AccountScreen;
