import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from '../components';
import { black } from '../utils/colors';

class QuizScreen extends Component {
	static navigationOptions = () => ({ title: 'Quiz' });

	state = {
		flipped: false,
		questionIndex: 0
	};

	handleFlip = () => {
		this.setState(prev => ({ flipped: !prev.flipped }));
	};

	handleAnswer = () => {
		const { questions } = this.props;
		const { questionIndex } = this.state;
		if (questions.length === questionIndex + 1) {
			alert('FinishedQuiz');
			this.props.navigation.goBack();
			return;
		}
		this.setState(prev => ({
			questionIndex: prev.questionIndex + 1,
			flipped: false
		}));
	};

	render() {
		const { questions } = this.props;
		const { questionIndex } = this.state;
		const card = questions[questionIndex];
		return (
			<View style={styles.container}>
				{!this.state.flipped ? (
					<View style={styles.cardContainer}>
						<Card
							text={card.question}
							onPress={this.handleFlip}
						/>
					</View>
				) : (
					<View style={styles.cardContainer}>
						<Card
							text={card.answer}
							onPress={this.handleFlip}
						>
							<View style={styles.btnContainer}>
								<Button
									label="Got it! 🤓"
									onPress={this.handleAnswer}
								/>
								<Button
									label="Oops! 😭"
									onPress={this.handleAnswer}
								/>
							</View>
						</Card>
					</View>
				)}
			</View>
		);
	}
}

const mapStateToProps = ({ decks, currentDeck }) => {
	const { questions } = decks[currentDeck];
	return { questions };
};

export default connect(mapStateToProps)(QuizScreen);

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
	},
	cardContainer: {
		flex: 1,
		margin: 10
	}
});
