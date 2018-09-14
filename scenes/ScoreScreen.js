import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { black, textprimaryColor } from '../utils/colors';
import { ScoreCard, Button } from '../components';

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

class ScoreScreen extends Component {
	static propTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired,
			state: PropTypes.shape({
				params: PropTypes.shape({
					scoreInfo: PropTypes.shape({
						score: PropTypes.number.isRequired,
						questionsTotal: PropTypes.number.isRequired
					})
				})
			})
		}).isRequired
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
