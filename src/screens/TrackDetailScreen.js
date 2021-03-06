import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import useDestoryTrack from "../hooks/useDestroyTrack";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);

  const track = state.find(el => el._id === _id);
  const initialCoords = track.locations[0].coords;

  const [destroyTrack] = useDestoryTrack();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Spacer>
          <Text h3 style={styles.title}>
            {track.name}
          </Text>
        </Spacer>
        <MapView
          initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
            ...initialCoords
          }}
          style={styles.map}
        >
          <Polyline
            coordinates={track.locations.map(loc => loc.coords)}
            strokeWidth={4}
            strokeColor="blue"
          />
        </MapView>
        <Spacer>
          <Button
            title="Edit Track"
            onPress={() => navigation.navigate("TrackEdit", { track })}
          />

          <Button
            title="Delete Track"
            buttonStyle={styles.delBtn}
            onPress={() => destroyTrack(_id)}
          />
        </Spacer>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
  map: {
    height: 300
  },
  delBtn: {
    backgroundColor: "red",
    marginTop: 16
  }
});

export default TrackDetailScreen;
