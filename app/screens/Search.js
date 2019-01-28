import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity
} from "react-native";
import EstyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";

import { getMovieByQuery, clearSearchPage } from "../action/searchList";
import { getMovieDetail } from "../action/movieDetails";
import MovieReelVertical from "../components/MovieReelVertical";

class Search extends Component {
  state = {
    text: "",
    page: 1
  };

  componentWillUnmount() {
    this.props.dispatch(clearSearchPage());
  }
  searchMovies = () => {
    this.props.dispatch(clearSearchPage());
    this.setState(
      {
        page: 1
      },
      () => {
        this.props.dispatch(getMovieByQuery(this.state.text, this.state.page));
      }
    );
  };
  goToMovie = movie_id => {
    this.props.navigation.navigate("DetailScreen");
    this.props.dispatch(getMovieDetail(movie_id));
  };

  getNextPage = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.props.dispatch(getMovieByQuery(this.state.text, this.state.page));
      }
    );
  };

  renderSearchText = () => (
    <View style={{ backgroundColor: "black" }}>
      <TextInput
        returnKeyType="search"
        style={styles.textInput}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        onSubmitEditing={this.searchMovies}
      />
    </View>
  );

  render() {
    if (!this.props.movies) {
      return <View style={styles.container}>{this.renderSearchText()}</View>;
    } else {
      return (
        <View style={styles.container}>
          {this.renderSearchText()}
          <FlatList
            onEndReached={this.getNextPage}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.renderTitleSeparator}
            data={this.props.movies.results}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => this.goToMovie(item.id)}>
                  <MovieReelVertical movies={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      );
    }
  }
}

const styles = EstyleSheet.create({
  $width: Dimensions.get("window").width - 15,
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center"
  },
  textInput: {
    height: 40,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 5,
    borderRadius: 5,
    width: "$width"
  }
});

const mapStateByProps = state => {
  return {
    movies: state.searchLists.data,
    loading: state.searchLists.loading
  };
};
export default connect(mapStateByProps)(Search);
