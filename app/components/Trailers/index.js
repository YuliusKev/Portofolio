import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EStyleSheet from "react-native-extended-stylesheet";
const Trailers = ({ detail }) => {
  openYoutube = url => {
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  };
  return (
    <ScrollView>
      {detail.videos.results.map(videos => (
        <View key={videos.id} style={styles.mainView}>
          <TouchableOpacity
            onPress={() =>
              this.openYoutube(`https://www.youtube.com/watch?v=${videos.key}`)
            }
          >
            <Icon name="logo-youtube" color="red" size={50} />
            <Text style={styles.name}>{videos.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  mainView: {
    marginTop: 20,
    marginLeft: 20
  },
  name: {
    color: "white",
    marginTop: 12,
    width: "100%",
    position: "absolute",
    paddingLeft: 60,
    alignItems: "center",
    fontWeight: "bold"
  }
});

export default Trailers;
