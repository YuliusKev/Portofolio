import React from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Ratings from "../Ratings";
import { TMDB_POSTER_URL } from "../../config/constants";

const MovieReelVertical = ({ movies }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${TMDB_POSTER_URL}${movies.poster_path}` }}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{movies.title}</Text>
        <Text>{movies.release_date}</Text>
        <Ratings detail={movies} color="black" />
        <Text numberOfLines={3} style={styles.overview}>
          {movies.overview}
        </Text>
      </View>
    </View>
  );
};
const styles = EStyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 150,
    height: 180
  },
  imageContainer: {
    backgroundColor: "white",
    height: 180,
    marginTop: 10,
    marginLeft: 20,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  details: {
    backgroundColor: "white",
    width: 180,
    marginTop: 10,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  title: {
    width: 170,
    fontWeight: "bold"
  },
  overview: {
    width: 170
  }
});

export default MovieReelVertical;
