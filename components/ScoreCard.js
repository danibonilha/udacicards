import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { textprimaryColor, defaultPrimaryColor, black } from '../utils/colors';

/* eslint react/display-name: 0 */
const results = {
	WIN: {
		msg: 'You Rock! Nailed it!',
		getIcon: () => (
			<Entypo
				name='trophy'
				size={70}
				color="yellow"
			/>
		)
	},
	LOSE: {
		msg: 'Sorry, keep trying!',
		getIcon: () => (
			<MaterialCommunityIcons
				name='skull'
				size={70}
				color={black}
			/>
		)
	},
	BETWEEN: {
		msg: 'Keep studying to get it all!',
		getIcon: () => (
			<MaterialCommunityIcons
				name='school'
				size={70}
				color={black}
			/>
		)
	}
};

export const ScoreCard = ({
	score,
	children,
	result = 'BETWEEN',
	questionsTotal,

}) => (
	<View style={styles.container}>
		{results[result].getIcon()}
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{results[result].msg}</Text>
		</View>
		<Text style={styles.title}>
			{score} of {questionsTotal}
		</Text>
		<View>
			{children}
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: 5,
		margin: 10,
		flex: 1
	},
	title: {
		color: textprimaryColor,
		fontSize: 28,
		textAlign: 'center',
		padding: 10
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});
