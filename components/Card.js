import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { textprimaryColor, accentColor } from '../utils/colors';

export const Card = ({ card, onPress }) => (
	<TouchableOpacity onPress={onPress} >
		<View style={[styles.container]}>
			<Text style={styles.title}>
				{card.question}
			</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: accentColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		margin: 10,
		minHeight: 300
	},
	title: {
		color: textprimaryColor,
		fontSize: 28,
		textAlign: 'center',
		padding: 10
	}
});
