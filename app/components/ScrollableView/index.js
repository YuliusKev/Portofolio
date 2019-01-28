import React from "react";
import ScrollableTabView from "react-native-scrollable-tab-view";
import { Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Info from "../Info";
import Casts from "../Casts";
import Trailers from "../Trailers";

const ScrollableView = ({ detail }) => (
  <ScrollableTabView
    tabBarInactiveTextColor="white"
    tabBarUnderlineStyle={{ backgroundColor: "white" }}
    tabBarActiveTextColor="white"
    tabBarBackgroundColor="black"
    tabBarTextStyle={styles.text}
  >
    <Info tabLabel="Info" detail={detail} />
    <Casts tabLabel="Casts" detail={detail} />
    <Trailers tabLabel="Trailers" detail={detail} />
  </ScrollableTabView>
);
const styles = EStyleSheet.create({
  underline: {
    borderColor: "white"
  },
  text: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
export default ScrollableView;
