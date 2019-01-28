import React from "react";
import { Image, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { TMDB_POSTER_URL } from "../../config/constants";
import Ratings from "../Ratings";
//import starDetail from '../../data/detail'

const MovieDetails = ({ detail }) => {
  const genres = detail.genres.map(genres => genres.name);

  return (
    <View style={styles.mainView}>
      <Image
        source={{ uri: `${TMDB_POSTER_URL}${detail.poster_path}` }}
        style={styles.posterView}
      />
      <View style={styles.detailView}>
        <Text style={styles.titleView}>{detail.original_title}</Text>
        <Text style={styles.taglineView}>{detail.tagline}</Text>

        <Text key={genres.id} style={styles.genresText}>
          {genres.join(", ")}
        </Text>
        <Ratings detail={detail} color="white" />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  mainView: {
    flexDirection: "row",
    marginLeft: 10,
    height: 150,
    alignItems: "flex-end"
  },
  posterView: {
    width: 130,
    height: 210
  },
  detailView: {
    marginLeft: 10
  },
  titleView: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    width: 150,
    marginBottom: 5
  },
  genresText: {
    color: "white",
    width: 230,
    marginBottom: 5
  },
  taglineView: {
    color: "white",
    fontSize: 18,
    width: 215,
    marginBottom: 5
  }
});
export default MovieDetails;
