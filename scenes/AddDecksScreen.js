import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  black,
  textprimaryColor
} from "../utils/colors";
import { TextInput, Button } from "../components";

export default class AddDecksScreen extends Component {
  state = {
    deckName: ""
  };

  handleTextChange = deckName => {
    this.setState({ deckName });
  };

  handleCreateDeck = () => {
    this.props.navigation.navigate("AddCard")
    this.setState({ deckName: "" });
  };

  render() {
    const { deckName } = this.state;
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
        >
          What is the title of your new deck ?
        </Text>
        <TextInput
          onChangeText={this.handleTextChange}
          value={deckName}
        />
        <Button
          onPress={this.handleCreateDeck}
          label="Create Deck"
          disabled={!deckName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    justifyContent: "flex-start"
  },
  text: {
    padding: 25,
    color: textprimaryColor,
    fontSize: 35,
    textAlign: "center"
  }
});
