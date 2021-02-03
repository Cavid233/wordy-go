import React from "react";


import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

import CrateDictScreen  from '../screens/CreateDictScreen';
import TestScreen from "../screens/TestScreen";
import DictScreen from "../screens/DictScreen";

let width_100 = Math.round(Dimensions.get("window").width / 100); // 4 cixi j7-de

const TestNavigator = createStackNavigator(
// const DictNavigator = createDrawerNavigator(
  {
    ProductsOverview: TestScreen,
    CreateOverview: CrateDictScreen,
  },
  {
    navigationOptions: {
      title: "Wordy Go",
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          // color={drawerConfig.tintColor}
          color="red"
        />
      ),
    },

    defaultNavigationOptions: {
      title: "Wordy Go",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#43C7A3" : "",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: width_100 * 7,
      },

      headerTintColor: Platform.OS === "android" ? "white" : "pink",
    },
  }
);

const DictAndExplore = createStackNavigator(
// const DictNavigator = createDrawerNavigator(
  {
    DictScreenOverview: DictScreen,
  },
  {
    navigationOptions: {
      title: "Choose&Explore Dict",
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          // color={drawerConfig.tintColor}
          color="red"
        />
      ),
    },

    defaultNavigationOptions: {
      title: "Choose&Explore Dict",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#43C7A3" : "",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: width_100 * 7,
      },

      headerTintColor: Platform.OS === "android" ? "white" : "pink",
    },
  }
);

const DictNavigator = createDrawerNavigator(
  {
    Test: TestNavigator,
    Dict: DictAndExplore,
    // Products: ProductsNavigator,
    // Orders: OrdersNavigator,
    // Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: 'purple',
      // activeBackgroundColor: 'yellow',
      // backgroundColor: 'brown'
    },
  }
);


export default createAppContainer(DictNavigator);
