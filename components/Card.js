import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { textprimaryColor, defaultPrimaryColor, white } from '../utils/colors';

const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		justifyContent: 'center',
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
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	turnLabel: {
		color: textprimaryColor,
		fontSize: 23,
		textAlign: 'center',
		padding: 10
	},
	turnContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export const Card = ({
	text,
	onPress,
	children,
	questionNumber,
	questionsTotal,
	nextCardType
}) => (
	<TouchableOpacity onPress={onPress} style={styles.container}>
		<Text style={styles.title}>
			{questionNumber} | {questionsTotal}
		</Text>
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{text}</Text>
		</View>
		<View style={{ flex: 1 }}>
			{children}
		</View>
		<View style={styles.turnContainer}>
			<Text style={styles.turnLabel}>
					Show {nextCardType}
			</Text>
			<Feather
				name='refresh-ccw'
				size={30}
				color={white}
			/>
		</View>
	</TouchableOpacity>
);

Card.propTypes = {
	children: PropTypes.node,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	nextCardType: PropTypes.string.isRequired,
	questionNumber: PropTypes.number.isRequired,
	questionsTotal: PropTypes.number.isRequired,
};
