import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { black, textprimaryColor } from '../utils/colors';
import { TextInput, Button } from '../components';
import { createCard } from '../store/actions';

const INPUT_FONT_SIZE = 20;
const QUESTION = 'question';
const ANSWER = 'answer';

class ScoreScreen extends Component {
	static navigationOptions = () => {
		return {
			title: 'Score'
		};
	};

	render() {
		const { scoreInfo } = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					Score:{scoreInfo.score} of {scoreInfo.questionsTotal}
				</Text>
			</View>
		);
	}
}

export default ScoreScreen;

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
