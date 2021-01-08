import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      headerShown: false,
    },
  },
  Section: {
    screen: SectionScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(TabNavigator);
