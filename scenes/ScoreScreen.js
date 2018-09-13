import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black, textprimaryColor } from '../utils/colors';
import { ScoreCard, Button } from '../components';


class ScoreScreen extends Component {
	static navigationOptions = () => {
		return {
			title: 'Score'
		};
	};

	navigateTo = route => () => this.props.navigation.navigate(route);

	handleResult = () => {
		const { score, questionsTotal } = this.props.navigation.state.params.scoreInfo;
		if (score === 0) return 'LOSE';
		if (score === questionsTotal) return 'WIN';
		return;
	}

	render() {
		const { score, questionsTotal } = this.props.navigation.state.params.scoreInfo;
		return (
			<View style={styles.container}>
				<ScoreCard
					score={score}
					result={this.handleResult()}
					questionsTotal={questionsTotal}
				>
					<View style={styles.btnContainer}>
						<Button
							label="Try it again! 🤓"
							onPress={this.navigateTo('Quiz')}
						/>
						<Button
							label="Back to Deck 🧐"
							onPress={this.navigateTo('SingleDeck')}
						/>
					</View>
				</ScoreCard>
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
	},
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});
