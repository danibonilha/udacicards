import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Deck, Button } from '../components';
import { black } from '../utils/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: black,
		justifyContent: 'center'
	},
	btnContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
class SingleDeckScreen extends Component {

	navigateTo = route => () => this.props.navigation.navigate(route);

	handleQuiz = () => {
		const { deck } = this.props;

		if(!deck.questions.length){
			Alert.alert('Oops!',
				'There are no cards yet, add at least one to start a quiz =)'
			);
			return;
		}
		this.navigateTo('Quiz')();
	}

	render() {
		const { deck } = this.props;
		return (
			<View style={styles.container}>
				<View style={{ justifyContent: 'center' }}>
					<Deck deck={deck} disabled={true} deckStyle={{ minHeight: 250 }} />
				</View>
				<View style={styles.btnContainer}>
					<Button label="Start Quiz" onPress={this.handleQuiz} />
					<Button label="Add Card" onPress={this.navigateTo('AddCard')} />
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ decks, currentDeck }) => ({ deck: decks[currentDeck] });

export default connect(mapStateToProps)(SingleDeckScreen);

SingleDeckScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	deck: PropTypes.shape({}).isRequired
};
