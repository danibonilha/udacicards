import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from '../components';
import { black } from '../utils/colors';

const RIGHT = 'CORRECT';
const WRONG = 'INCORRECT';

class QuizScreen extends Component {
	static navigationOptions = () => ({ title: 'Quiz' });
	state = {
		flipped: false,
		questionIndex: 0,
		score: 0
	}

	getQuestionNumber = () => this.state.questionIndex + 1;
	getQuestionsSize = () => this.props.questions.length;

	handleScore = (point) => {
		this.setState(prev => ({ score: prev.score + point }));
	};

	handleFlip = () => {
		this.setState(prev => ({ flipped: !prev.flipped }));
	};

	handleAnswer = (type) => () => {
		const questionsTotal = this.getQuestionsSize();
		const questionNumber = this.getQuestionNumber();
		const point = type === RIGHT ? 1 : 0;

		this.handleScore(point);

		if (questionsTotal === questionNumber) {
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
		const questionsTotal = this.getQuestionsSize();
		const questionNumber = this.getQuestionNumber();

		return (
			<View style={styles.container}>
				{!this.state.flipped ? (
					<View style={styles.cardContainer}>
						<Card
							text={card.question}
							onPress={this.handleFlip}
							questionsTotal={questionsTotal}
							questionNumber={questionNumber}
						/>
					</View>
				) : (
					<View style={styles.cardContainer}>
						<Card
							text={card.answer}
							onPress={this.handleFlip}
							questionsTotal={questionsTotal}
							questionNumber={questionNumber}
						>
							<View style={styles.btnContainer}>
								<Button
									label="Got it! 🤓"
									onPress={this.handleAnswer(RIGHT)}
								/>
								<Button
									label="Oops! 😭"
									onPress={this.handleAnswer(WRONG)}
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
