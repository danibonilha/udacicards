import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black, textprimaryColor } from '../utils/colors';
import { TextInput, Button } from '../components';

const INPUT_FONT_SIZE = 20;
const QUESTION = 'question';
const ANSWER = 'answer';

export default class AddCardScreen extends Component {
	static navigationOptions = () => {
		return {
			title: 'Add Card'
		};
	};

	state = {
		[QUESTION]: '',
		[ANSWER]: ''
	};

	handleTextChange = field => text => {
		this.setState({ [field]: text });
	};

	handleSubmit = () => {
		console.log('submit');
		this.props.navigation.goBack();
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
