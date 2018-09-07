import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { defaultPrimaryColor, textprimaryColor, white } from '../utils/colors';

const handleCardsText = (cardsNumber) => (
  cardsNumber > 1 ? `${cardsNumber} cards` : `${cardsNumber} card`
);

export const Deck = ({ deck, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.deckContainer}>
      <Text style={styles.title}>
        {deck.title}
      </Text>
      <Text style={styles.cardsNumber}>
        {handleCardsText(deck.questions.length)}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    backgroundColor: defaultPrimaryColor,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    margin: 10,
    maxHeight: 150,
    minHeight: 100,
  },
  title: {
    color: textprimaryColor,
    fontSize: 30
  },
  cardsNumber: {
    color: textprimaryColor,
    fontSize: 15
  }
});
