import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter track name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button
            title="Stop Recording"
            onPress={stopRecording}
            buttonStyle={styles.stopBtn}
          />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}

        {!recording && locations.length ? (
          <Button
            title="Save Recording"
            buttonStyle={styles.saveBtn}
            onPress={saveTrack}
          />
        ) : null}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  stopBtn: {
    backgroundColor: "red"
  },
  saveBtn: {
    backgroundColor: "green",
    marginTop: 16
  }
});

export default TrackForm;
