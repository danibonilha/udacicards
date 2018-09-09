import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Deck, Button } from '../components';
import { black } from '../utils/colors';

export default class SingleDeckScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.state.params.deck.title
		};
	};

	navigateTo = (route, deck) => () => this.props.navigation.navigate(route, { deck: deck })

	render() {
		const { deck } = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<Deck
						deck={deck}
						disabled={true}
						deckStyle={{ minHeight: 250 }}
					/>
				</View>
				<View style={styles.btnContainer}>
					<Button
						label="Start Quiz"
						onPress={this.navigateTo('Quiz', deck)}
					/>
					<Button
						label="Add Card"
						onPress={this.navigateTo('AddCard', deck)}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: black
	},
	btnContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
