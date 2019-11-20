import React, { useContext, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import KeyboardViewContainer from "../components/KeyboardViewContainer";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

const TrackEdit = ({ navigation }) => {
  const track = navigation.getParam("track");
  const { editTrack } = useContext(TrackContext);

  const [newName, setNewName] = useState(track.name);

  return (
    <KeyboardViewContainer>
      <Spacer>
        <Input
          placeholder="Change name"
          value={newName}
          onChangeText={setNewName}
          autoFocus
        />
      </Spacer>
      <Spacer>
        <Button
          title="Save Changes"
          onPress={async () => {
            await editTrack(track._id, newName);
            navigation.navigate("TrackList");
          }}
        />
      </Spacer>
    </KeyboardViewContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
});

export default TrackEdit;
