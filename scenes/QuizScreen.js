import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from '../components';
import { black } from '../utils/colors';

class QuizScreen extends Component {
	static navigationOptions = () => ({ title: 'Quiz' });

	state = {
		flipped: false
	};

	handleFlip = () => {
		this.setState(prev => ({ flipped: !prev.flipped }));
	};

	render() {
		const { questions } = this.props;
		return (
			<View style={styles.container}>
				{!this.state.flipped ? (
					<View style={{ flex: 1, margin: 10 }}>
						<Card text={questions[0].question} onPress={this.handleFlip} />
					</View>
				) : (
					<View style={{ flex: 1, margin: 10 }}>
						<Card text={questions[0].answer} onPress={this.handleFlip} >
							<View style={styles.btnContainer}>
								<Button label="Got it! 🤓" />
								<Button label="Oops! 😭" />
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
	}
});
