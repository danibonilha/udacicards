import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { textprimaryColor, defaultPrimaryColor } from '../utils/colors';

export const Card = ({ text, onPress, children }) => (
	<TouchableOpacity
		onPress={onPress} style={styles.container}>
		<View style={styles.titleContainer}>
			<Text style={styles.title}>
				{text}
			</Text>
		</View>
		<View style={{ flex: 1 }}>
			{children}
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		margin: 10,
		flex: 1,
	},
	title: {
		color: textprimaryColor,
		fontSize: 28,
		textAlign: 'center',
		padding: 10
	},
	titleContainer: {
		flex: 4,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
