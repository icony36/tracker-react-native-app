import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator(
      {
        TrackCreate: {
          screen: TrackCreateScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="plus-circle" color={tintColor} size={32} />
            )
          }
        },
        trackListFlow: {
          screen: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
          }),
          navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
              <Icon name="format-list-bulleted" color={tintColor} size={32} />
            )
          })
        },
        Account: {
          screen: AccountScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="account" color={tintColor} size={32} />
            )
          }
        }
      },
      {
        tabBarOptions: {
          showLabel: false
        }
      }
    )
  },
  {
    initialRouteName: "ResolveAuth"
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
