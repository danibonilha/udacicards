import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { textprimaryColor, accentColor, darkPrimaryColor, defaultPrimaryColor } from '../utils/colors';

export const Card = ({ text, onPress, children }) => (
	<TouchableOpacity onPress={onPress} >
		<View style={[styles.container]}>
			<Text style={styles.title}>
				{text}
			</Text>
			{children}
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		margin: 10,
		minHeight: 500
	},
	title: {
		color: textprimaryColor,
		fontSize: 28,
		textAlign: 'center',
		padding: 10
	}
});
