import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";
import { Dimensions } from "react-native";

//import store from "./config/stores"
import Navigator from "./config/routes";
import store from "./config/stores";

//import from screen
import Home from "./screens/Home";
import Slider from "./screens/Search";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "white",
  $softGrey: "#d3d3d3",
  $imageSize: Dimensions.get("window").width
});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
