import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button } from '../components';
import { black } from '../utils/colors';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

const RIGHT = 'CORRECT';
const WRONG = 'INCORRECT';

const initialState = {
	flipped: false,
	questionIndex: 0,
	score: 0
};

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

class QuizScreen extends Component {
	state = initialState

	componentDidMount = () => {
		clearLocalNotification().then(setLocalNotification());
	}

	componentDidMount = async () => {
		await clearLocalNotification();
		setLocalNotification();
	}

	getQuestionNumber = () => this.state.questionIndex + 1;

	getQuestionsSize = () => this.props.questions.length;

	goToScore = () => {
		const { score } = this.state;
		const { navigate } = this.props.navigation;
		const scoreInfo = {
			score,
			questionsTotal: this.getQuestionsSize()
		};
		this.setState({ ...initialState });
		navigate('Score', { scoreInfo });
	}

	handleScore = (point) => {
		this.setState(prev => ({
			score: prev.score + point
		}), this.goToScore
		);
	};

	handleFlip = () => {
		this.setState(prev => ({ flipped: !prev.flipped }));
	};

	handleAnswer = (type) => () => {
		const questionsTotal = this.getQuestionsSize();
		const questionNumber = this.getQuestionNumber();
		const point = type === RIGHT ? 1 : 0;

		if (questionsTotal === questionNumber) {
			this.handleScore(point);
			return;
		}
		this.setState(prev => ({
			questionIndex: prev.questionIndex + 1,
			flipped: false,
			score: prev.score + point
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
							nextCardType="Answer"
						/>
					</View>
				) : (
					<View style={styles.cardContainer}>
						<Card
							text={card.answer}
							onPress={this.handleFlip}
							questionsTotal={questionsTotal}
							questionNumber={questionNumber}
							nextCardType="Question"
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

QuizScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	questions: PropTypes.arrayOf(PropTypes.shape({}))
};
