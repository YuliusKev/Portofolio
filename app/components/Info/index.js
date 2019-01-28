import React from "react";
import { Text, ScrollView, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import moment from "moment";

const Info = ({ detail }) => {
  const director = detail.casts.crew.find(crew => crew.job === "Director");

  console.log(director);
  return (
    <ScrollView>
      <Text style={styles.overviewTitle}>Overview</Text>
      <Text style={styles.overviewText}>{detail.overview}</Text>
      <View style={{ flexDirection: "row", paddingBottom: 20 }}>
        <Text style={styles.releaseDateTitle}>Release Date</Text>
        <Text style={styles.directorText}>
          {moment(new Date(detail.release_date)).format("MMMM Do YYYY")}
        </Text>
      </View>

      <View style={{ paddingBottom: 20, width: "100%" }}>
        <Text style={styles.releaseDateTitle}>Directed By</Text>
        <Text style={styles.directorText}>{director.name}</Text>
      </View>

      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <Text style={styles.releaseDateTitle}>Budget</Text>
        <Text style={styles.directorText}>$ {detail.budget}</Text>
      </View>
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  overviewTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    marginLeft: 10
  },
  overviewText: {
    color: "white",
    marginLeft: 10,
    marginRight: 5,
    paddingBottom: 10
  },
  releaseDateTitle: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  directorText: {
    color: "white",
    marginTop: 5,
    width: "100%",
    position: "absolute",
    textAlign: "right",
    paddingRight: 5
  }
});

export default Info;
