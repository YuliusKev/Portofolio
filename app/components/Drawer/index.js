import React from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { DrawerItems } from "react-navigation";

const Drawer = props => {
  const handleOnItemPress = ({ route }) => {
    if (route.routeName === "Search") {
      props.navigation.navigate("SearchScreen");
    } else {
      props.navigation.navigate(route.routeName);
      props.navigation.closeDrawer();
    }
  };

  return (
    <View style={styles.container}>
      <DrawerItems {...props} onItemPress={handleOnItemPress} />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Drawer;
