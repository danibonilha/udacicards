import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Deck, Button } from '../components';
import { black, textprimaryColor, white } from '../utils/colors';
import { removeDeck } from '../store/actions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: black,
	},
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	startLabel: {
		color: textprimaryColor,
		fontSize: 23,
		textAlign: 'center',
		padding: 10
	},
	startContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const ALERT_TITLE = 'Oops!';
const ALERT_MESSAGE = 'There are no cards yet, add at least one to start a quiz =)';

class SingleDeckScreen extends Component {
	static propTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired,
			popToTop: PropTypes.func.isRequired,
		}).isRequired,
		deck: PropTypes.shape({}),
		removeDeck: PropTypes.func.isRequired
	};

	navigateTo = route => () => this.props.navigation.navigate(route);

	removeDeck = () => {
		const { removeDeck, navigation, deck: { title } } = this.props;
		removeDeck(title);
		navigation.goBack();
	}

	handleQuiz = () => {
		const { deck } = this.props;
		if (!deck.questions.length) {
			Alert.alert(ALERT_TITLE, ALERT_MESSAGE);
			return;
		}
		this.navigateTo('Quiz')();
	}

	render() {
		const { deck } = this.props;
		return (
			<View style={styles.container}>
				{deck &&
				<Fragment>
					<Deck
						deck={deck}
						deckStyle={{ minHeight: 400 }}
						onPress={this.handleQuiz}
					>
						<View style={styles.startContainer}>
							<Text style={styles.startLabel}>
							Start Quiz
							</Text>
							<MaterialCommunityIcons
								name='cards-outline'
								size={45}
								color={white}
							/>
						</View>
					</Deck>
					<Button label="Add Card" onPress={this.navigateTo('AddCard')} />
					<Button label="Remove Deck" onPress={this.removeDeck} />
				</Fragment>}
			</View>
		);
	}
}

const mapStateToProps = ({ decks, currentDeck }) => ({ deck: decks[currentDeck] });

export default connect(mapStateToProps, { removeDeck })(SingleDeckScreen);
