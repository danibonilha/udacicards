import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Deck } from '../components';
import { black } from '../utils/colors';
export default class DecksScreen extends Component {
  handleDeckPress = (deck) => () => {
    this.props.navigation.navigate("SingleDeck", { deck: deck })
  }
  render() {
    return (
      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollContent}
      >
        {Object.values(decks).map((deck) => (
          <Deck
            key={deck.title}
            deck={deck}
            onPress={this.handleDeckPress(deck)}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: black
  },
  scrollContent: {
    justifyContent: 'space-around',
    backgroundColor: black,
    paddingTop: 5
  }
});

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}