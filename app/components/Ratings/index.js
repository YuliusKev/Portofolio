import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EStyleSheet from "react-native-extended-stylesheet";

const Ratings = ({ detail, color }) => (
  <View style={styles.view}>
    <Icon name="md-star" color="yellow" size={20} />
    <Text style={{ ...styles.ratingValues, color: color }}>
      {detail.vote_average}
    </Text>
  </View>
);

const styles = EStyleSheet.create({
  view: {
    flexDirection: "row"
  },
  ratingValues: {
    marginTop: 2,
    marginLeft: 2
  }
});

export default Ratings;
