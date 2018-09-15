import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDeck } from '../store/actions';
import {
	black,
	textprimaryColor
} from '../utils/colors';
import { TextInput, Button } from '../components';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: black,
		justifyContent: 'flex-start'
	},
	text: {
		padding: 25,
		color: textprimaryColor,
		fontSize: 35,
		textAlign: 'center'
	}
});

const ALERT_TITLE = 'Uh-oh!';
const ALERT_MESSAGE = 'A deck with this name already exists, please choose a different one.';

class AddDecksScreen extends Component {
	static propTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired,
		}).isRequired,
		createDeck: PropTypes.func.isRequired,
		decks: PropTypes.shape({})
	};

	state = {
		deckName: ''
	};

	handleTextChange = deckName => {
		this.setState({ deckName });
	};

	clearName = () => this.setState({ deckName: '' })

	handleCreateDeck = () => {
		const { deckName } = this.state;
		const { createDeck, navigation, decks } = this.props;
		if(decks[deckName]) {
			Alert.alert(ALERT_TITLE, ALERT_MESSAGE);
			return;
		}
		createDeck(deckName);
		this.clearName();
		navigation.navigate('SingleDeck');
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
					setMargin
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps, { createDeck })(AddDecksScreen);
