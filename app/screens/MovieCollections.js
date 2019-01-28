import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";

import MovieReelVertical from "../components/MovieReelVertical";
import { getMovieDetail } from "../action/movieDetails";
import { getMovieLists, clearMovies } from "../action/movieLists";

class MovieCollection extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const { title } = params;

    return {
      title
    };
  };

  state = {
    page: 1
  };

  componentWillUnmount() {
    this.props.dispatch(clearMovies());
  }

  goToMovie = movie_id => {
    this.props.navigation.navigate("DetailScreen");
    this.props.dispatch(getMovieDetail(movie_id));
  };

  getMoreLists = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.props.dispatch(
          getMovieLists(this.props.listName, this.state.page)
        );
      }
    );
  };
  render() {
    if (!this.props.movieCollection) {
      return (
        <View
          style={{
            justifyContent: "center",
            backgroundColor: "black",
            flex: 1
          }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    } else {
      return (
        <FlatList
          onEndReached={this.getMoreLists}
          style={styles.mainView}
          keyExtractor={item => item.id.toString()}
          data={this.props.movieCollection.results}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => this.goToMovie(item.id)}>
                <MovieReelVertical movies={item} />
              </TouchableOpacity>
            );
          }}
        />
      );
    }
  }
}

const styles = EStyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "black"
  }
});

const mapStateToProps = state => {
  return {
    movieCollection: state.movieLists.data,
    loading: state.movieLists.loading,
    listName: state.movieLists.listName
  };
};

export default connect(mapStateToProps)(MovieCollection);
