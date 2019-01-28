import React from "react";
import { Image, Text, ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { TMDB_POSTER_URL } from "../../config/constants";

const Casts = ({ detail }) => {
  return (
    <ScrollView>
      {detail.casts.cast.map(cast => (
        <View key={cast.id}>
          <Image
            source={{ uri: `${TMDB_POSTER_URL}${cast.profile_path}` }}
            style={styles.profile_pict}
          />
          <Text style={styles.name}>{cast.name}</Text>
          <Text style={styles.character}>as {cast.character}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  profile_pict: {
    width: 75,
    height: 75,
    borderRadius: 35,
    marginTop: 15
  },
  name: {
    color: "white",
    fontSize: 15,
    width: "100%",
    position: "absolute",
    paddingLeft: 100,
    paddingTop: 30
  },
  character: {
    color: "grey",
    fontSize: 15,
    width: "100%",
    position: "absolute",
    paddingLeft: 100,
    paddingTop: 50
  }
});

export default Casts;
