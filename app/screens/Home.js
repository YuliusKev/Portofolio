import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  Button,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import EstyleSheet from "react-native-extended-stylesheet";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";

import Ratings from "../components/Ratings";
import { TMDB_POSTER_URL, TMDB_BACKDROP_URL } from "../config/constants";
import { getMovieDetail } from "../action/movieDetails";
import { getMovieLists } from "../action/movieLists";

import { getHomeNowPlayingList, getHomePopularList } from "../action/homeList";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getHomeNowPlayingList());
    this.props.dispatch(getHomePopularList());
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <TouchableOpacity onPress={navigation.openDrawer}>
          <Icon
            name="bars"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      )
    };
  };

  sliderPage(movie_id) {
    this.props.dispatch(getMovieDetail(movie_id));
    this.props.navigation.navigate("DetailScreen");
  }

  movieCollection(title) {
    this.props.navigation.navigate("MovieCollections", {
      title
    });
  }

  //   increment = () => {
  //     this.props.dispatch({
  //       type: "INCREMENT"
  //     });
  //   };

  openPopular = ({ listName, page }) => {
    this.movieCollection("Popular");
    this.props.dispatch(getMovieLists(listName, page));
  };

  openNowPlaying = ({ listName, page }) => {
    this.movieCollection("Now Playing");
    this.props.dispatch(getMovieLists(listName, page));
  };

  openTopRated = ({ listName, page }) => {
    this.movieCollection("Top Rated");
    this.props.dispatch(getMovieLists(listName, page));
  };

  openUpcoming = ({ listName, page }) => {
    this.movieCollection("Upcoming");
    this.props.dispatch(getMovieLists(listName, page));
  };

  render() {
    if (!this.props.movieLists || !this.props.popularList) {
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
      const nowPlaying = this.props.movieLists.results;
      return (
        <ScrollView style={styles.scrollView}>
          {/* <View>
            <Text style={{ color: "white" }}>{this.props.number}</Text>
            <Button title="Increment" onPress={this.increment} />
          </View> */}
          <View style={styles.firstView}>
            <Swiper loop autoplay autoplayTimeout={4} showsPagination={false}>
              {nowPlaying.map(movie => {
                return (
                  <View key={movie.id.toString()}>
                    <ImageBackground
                      source={{
                        uri: `${TMDB_BACKDROP_URL}${movie.backdrop_path}`
                      }}
                      style={{ width: "100%", height: "100%", opacity: 0.5 }}
                    />
                    <View
                      style={{ position: "absolute", flexDirection: "row" }}
                    >
                      <Image
                        source={{
                          uri: `${TMDB_POSTER_URL}${movie.poster_path}`
                        }}
                        style={{
                          marginTop: 50,
                          resizeMode: "contain",
                          marginLeft: 20,
                          width: 150,
                          height: 180
                        }}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          numberOfLines={3}
                          style={{
                            color: "white",
                            marginTop: 50,
                            fontSize: 18,
                            fontWeight: "bold",
                            width: 150
                          }}
                        >
                          {movie.title}
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            marginTop: 5
                          }}
                        >
                          Action
                        </Text>
                        <Ratings detail={movie} color={"white"} />
                        <Text
                          numberOfLines={3}
                          style={{
                            color: "white",
                            width: 170
                          }}
                        >
                          {movie.overview}
                        </Text>
                        <TouchableOpacity
                          style={{
                            marginTop: 5,
                            padding: 2,
                            paddingLeft: 3,
                            backgroundColor: "red",
                            width: 85,
                            height: 25,
                            borderRadius: 5
                          }}
                          onPress={() => this.sliderPage(movie.id)}
                        >
                          <Text style={{ color: "white" }}>View Details</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
            </Swiper>
          </View>

          <View style={styles.secondView}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "white",
                  marginTop: 7,
                  marginLeft: 7,
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Popular
              </Text>
              <TouchableOpacity
                style={{
                  width: 60,
                  marginLeft: Dimensions.get("screen").width - 150
                }}
                onPress={() =>
                  this.openPopular({ listName: "popular", page: 1 })
                }
              >
                <Text
                  style={{
                    color: "white",
                    marginTop: 7,
                    fontSize: 20
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={this.renderTitleSeparator}
              data={this.props.popularList.results}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View
                    style={{ margin: 10, borderRadius: 5, overflow: "hidden" }}
                  >
                    <TouchableOpacity onPress={() => this.sliderPage(item.id)}>
                      <Image
                        source={{
                          uri: `${TMDB_POSTER_URL}${item.poster_path}`
                        }}
                        style={{
                          width: 150,
                          height: 200
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "white",
                          width: 150,
                          height: 50,
                          justifyContent: "center",
                          alignItems: "center",
                          borderBottomEndRadius: 5,
                          borderBottomStartRadius: 5
                        }}
                      >
                        <Text
                          numberOfLines={2}
                          style={{
                            color: "black",
                            padding: 5,
                            textAlign: "center",
                            fontWeight: "bold"
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>

          {/* Ini untuk button Now Showing */}
          <TouchableOpacity
            onPress={() =>
              this.openNowPlaying({
                listName: "now_playing",
                page: 1
              })
            }
          >
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Icon name="play" size={20} color="grey" />
              <Text style={{ color: "white", fontSize: 20, paddingLeft: 15 }}>
                Now Playing
              </Text>
            </View>
          </TouchableOpacity>

          {/* Ini untuk button Top Rated */}
          <TouchableOpacity
            onPress={() =>
              this.openTopRated({
                listName: "top_rated",
                page: 1
              })
            }
          >
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Icon name="chart-line" size={20} color="grey" />
              <Text style={{ color: "white", fontSize: 20, paddingLeft: 15 }}>
                Top Rated
              </Text>
            </View>
          </TouchableOpacity>

          {/* Ini untuk button Upcoming */}
          <TouchableOpacity
            onPress={() =>
              this.openUpcoming({
                listName: "upcoming",
                page: 1
              })
            }
          >
            <View style={{ flexDirection: "row", padding: 15 }}>
              <Icon name="binoculars" size={20} color="grey" />
              <Text style={{ color: "white", fontSize: 20, paddingLeft: 15 }}>
                Upcoming
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  }
}

styles = EstyleSheet.create({
  scrollView: {
    backgroundColor: "black"
  },
  firstView: {
    height: 250
  },
  secondView: {
    height: 310
  }
});
const mapStateToProps = state => {
  return {
    movieLists: state.homeLists.data,
    loading: state.homeLists.loading,
    popularList: state.homeLists.dataPopular,
    number: state.number
  };
};

export default connect(mapStateToProps)(Home);
