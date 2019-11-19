// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { withNavigationFocus } from "react-navigation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import KeyboardView from "../components/KeyboardView";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);

  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <KeyboardView>
      <>
        <Spacer>
          <Text h3 style={styles.title}>
            Create New Track
          </Text>
        </Spacer>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
      </>
    </KeyboardView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
});

export default withNavigationFocus(TrackCreateScreen);
