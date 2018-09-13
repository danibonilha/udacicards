import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { defaultPrimaryColor, textprimaryColor } from '../utils/colors';

const styles = StyleSheet.create({
	deckContainer: {
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		borderRadius: 5,
		margin: 10,
		maxHeight: 150,
		minHeight: 120,
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

const handleCardsText = (cardsNumber) => (
	cardsNumber > 1 ? `${cardsNumber} cards` : `${cardsNumber} card`
);

export const Deck = ({ deck, onPress, disabled = false, deckStyle }) => (
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<View style={[styles.deckContainer, deckStyle]}>
			<Text style={styles.title}>
				{deck.title}
			</Text>
			<Text style={styles.cardsNumber}>
				{handleCardsText(deck.questions.length)}
			</Text>
		</View>
	</TouchableOpacity>
);

Deck.propTypes = {
	deck: PropTypes.shape({}).isRequired,
	deckStyle: PropTypes.shape({}),
	disabled: PropTypes.bool,
	onPress: PropTypes.func
};
