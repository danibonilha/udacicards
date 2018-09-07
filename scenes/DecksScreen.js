import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { defaultPrimaryColor, dividerColor, textprimaryColor, white } from '../utils/colors';


export default class DecksScreen extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollContent}
      >
        {Object.values(decks).map(
          (deck) => <Deck key={deck.title} deck={deck} />
        )}
      </ScrollView>
    );
  }
}

export const Deck = ({ deck }) => (
  <View style={styles.deckContainer}>
    <Text style={styles.title}>{
      deck.title}
    </Text>
    <Text style={styles.cardsNumber}>
      {handleCardsText(deck.questions.length)}
    </Text>
  </View>
);

const handleCardsText = (cardsNumber) => (
  cardsNumber > 1 ? `${cardsNumber} cards` : `${cardsNumber} card`
);

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    backgroundColor: defaultPrimaryColor,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: dividerColor,
    borderRadius: 4,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 5,
    maxHeight: 150,
    minHeight: 100
  },
  title: {
    color: textprimaryColor,
    fontSize: 30
  },
  cardsNumber: {
    color: textprimaryColor,
    fontSize: 15
  },
  scrollStyle: {
    backgroundColor: white
  },
  scrollContent: {
    justifyContent: 'space-between',
    backgroundColor: white
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