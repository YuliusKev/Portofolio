import React, { Component } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import BackgroundSlider from "../components/BackgroundSlider";
import MovieDetails from "../components/MovieDetails";
import ScrollableView from "../components/ScrollableView";
import { clearMovies } from "../action/movieDetails";

class Detail extends Component {
  componentWillUnmount() {
    this.props.dispatch(clearMovies());
  }
  render() {
    console.log(this.props.movie);
    if (!this.props.movie) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size={"large"} color="red" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View
            style={{
              paddingTop: 5,
              paddingLeft: 5,
              alignItems: "flex-start"
            }}
          />
          <BackgroundSlider detail={this.props.movie} />
          <MovieDetails detail={this.props.movie} />
          <ScrollableView detail={this.props.movie} />

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              top: 16,
              left: 16,
              position: "absolute",
              zIndex: 99
            }}
          >
            <Icon name="md-close" color="white" size={40} />
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  movieDescriptionContainer: {
    height: 100
  },
  containerLoading: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return { movie: state.movie.data, loading: state.movie.loading };
};

export default connect(mapStateToProps)(Detail);
