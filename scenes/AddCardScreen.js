import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { black, textprimaryColor } from '../utils/colors';
import { TextInput, Button } from '../components';
import { createCard } from '../store/actions';

const INPUT_FONT_SIZE = 20;
const QUESTION = 'question';
const ANSWER = 'answer';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: black
	},
	text: {
		paddingTop: 20,
		paddingLeft: 25,
		color: textprimaryColor,
		fontSize: 30,
		textAlign: 'left'
	}
});
class AddCardScreen extends Component {
	static propTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired,
		}).isRequired,
		createCard: PropTypes.func.isRequired,
		currentDeck: PropTypes.string.isRequired
	};

	state = {
		[QUESTION]: '',
		[ANSWER]: ''
	};

	handleTextChange = field => text => {
		this.setState({ [field]: text });
	};

	handleSubmit = () => {
		const { createCard, navigation, currentDeck } = this.props;
		const card = { ...this.state };
		createCard({ deckID: currentDeck, card });
		navigation.goBack();
	};

	render() {
		const { question, answer } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Enter a question:</Text>
				<TextInput
					onChangeText={this.handleTextChange(QUESTION)}
					value={question}
					multiline
					fontSize={INPUT_FONT_SIZE}
				/>
				<Text style={styles.text}>What is the answer?</Text>
				<TextInput
					onChangeText={this.handleTextChange(ANSWER)}
					value={answer}
					multiline
					fontSize={INPUT_FONT_SIZE}
					autoFocus={false}
				/>
				<Button
					onPress={this.handleSubmit}
					label="Submit"
					disabled={!question || !answer}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ currentDeck }) => ({ currentDeck });

export default connect(mapStateToProps, { createCard })(AddCardScreen);
