import React, { useContext } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Text, ListItem } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style>
        <Spacer>
          <NavigationEvents onWillFocus={fetchTracks} />
          <Text h3 style={styles.title}>
            Track List
          </Text>
        </Spacer>
        <FlatList
          data={state}
          keyExtractor={el => el._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TrackDetail", { _id: item._id });
                }}
              >
                <ListItem
                  chevron
                  title={item.name}
                  bottomDivider
                  style={styles.item}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
  item: {
    paddingHorizontal: 16
  }
});

export default TrackListScreen;
