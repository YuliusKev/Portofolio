import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Details from "../screens/Detail";
import MovieCollections from "../screens/MovieCollections";

import Drawer from "../components/Drawer";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Movies",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "white"
    }
  },
  SearchScreen: {
    screen: Search,
    navigationOptions: {
      title: "Search",
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white"
    }
  },
  DetailScreen: {
    screen: Details,
    navigationOptions: {
      header: null
    }
  },
  MovieCollections: {
    screen: MovieCollections,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white"
    }
  }
});

const RootNavigator = createDrawerNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        drawerIcon: <Icon name="md-search" color="white" size={32} />
      }
    },
    Movies: {
      screen: AppNavigator,
      navigationOptions: {
        drawerIcon: <Icon name="md-film" color="white" size={32} />
      }
    }
  },
  {
    initialRouteName: "Movies",
    drawerBackgroundColor: "black",
    contentComponent: Drawer,
    contentOptions: {
      labelStyle: {
        fontSize: 23
      },
      inactiveTintColor: "white",
      activeTintColor: "red",
      itemsContainerStyle: {
        justifyContent: "center"
      }
    }
  }
);

export default createAppContainer(RootNavigator);
