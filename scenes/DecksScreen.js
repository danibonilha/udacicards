import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Deck } from '../components';
import { black } from '../utils/colors';
import { setCurrentDeck } from '../store/actions';

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

class DecksScreen extends Component {
	handleDeckPress = deckID => () => {
		const { setCurrentDeck, navigation } = this.props;
		setCurrentDeck(deckID);
		navigation.navigate('SingleDeck');
	};

	render() {
		const { decks } = this.props;
		return (
			<ScrollView
				style={styles.scrollStyle}
				contentContainerStyle={styles.scrollContent}
			>
				{Object.values(decks).map(deck => (
					<Deck
						key={deck.title}
						deck={deck}
						onPress={this.handleDeckPress(deck.title)}
					/>
				))}
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps, { setCurrentDeck })(DecksScreen);

DecksScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	decks: PropTypes.shape({}).isRequired,
	setCurrentDeck: PropTypes.func.isRequired
};