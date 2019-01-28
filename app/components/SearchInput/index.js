import React from "react";
import { TextInput, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SearchInput = () => (
  <TextInput returnKeyType="search" style={styles.textInput} />
);

const styles = EStyleSheet.create({
  $width: Dimensions.get("window").width - 15,
  textInput: {
    height: 40,
    backgroundColor: "white",
    marginTop: 40,
    paddingHorizontal: 5,
    borderRadius: 5,
    width: "$width"
  }
});

export default SearchInput;
