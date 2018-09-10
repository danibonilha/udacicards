import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Deck, Button } from '../components';
import { black } from '../utils/colors';

class SingleDeckScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Deck'
		};
	};

	navigateTo = route => () => this.props.navigation.navigate(route);

	render() {
		const { deck } = this.props;
		return (
			<View style={styles.container}>
				<View style={{ justifyContent: 'center' }}>
					<Deck deck={deck} disabled={true} deckStyle={{ minHeight: 250 }} />
				</View>
				<View style={styles.btnContainer}>
					<Button label="Start Quiz" onPress={this.navigateTo('Quiz')} />
					<Button label="Add Card" onPress={this.navigateTo('AddCard')} />
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ decks, currentDeck }) => ({ deck: decks[currentDeck] });

export default connect(mapStateToProps)(SingleDeckScreen);

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
