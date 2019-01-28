import React from "react";
import Swiper from "react-native-swiper";
import { View, Text, ImageBackground } from "react-native";
import { TMDB_BACKDROP_URL } from "../../config/constants";
import EStyleSheet from "react-native-extended-stylesheet";

const BackgroundSlider = ({ detail }) => {
  return (
    <View style={{ height: 200 }}>
      <Swiper loop autoplay autoplayTimeout={2.5} showsPagination={false}>
        {detail.images.backdrops.map(details => {
          return (
            <ImageBackground
              key={details.file_path}
              source={{ uri: `${TMDB_BACKDROP_URL}${details.file_path}` }}
              style={styles.images}
            />
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = EStyleSheet.create({
  images: { width: "100%", height: 200, opacity: 0.5 }
});
export default BackgroundSlider;
