import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { grey } from '../utils/colors';

const styles = StyleSheet.create({
	container: {
		marginTop: 80,
		alignItems: 'center',
	},
	title: {
		color: grey,
		fontSize: 45,
		textAlign: 'center',
		marginLeft: 25,
		marginRight: 25
	}
});

export const NoDecks = () => (
	<View style={styles.container}>
		<Text style={styles.title}>
			Ready to rock?
		</Text>
		<Text style={[styles.title, { fontSize: 35 }]}>
			Use the tab below to add a deck and start studying!
		</Text>
		<View style={{ paddingTop: 25 }}>
			<SimpleLineIcons
				name="notebook"
				color={grey}
				size={80}
			/>
		</View>
	</View>
);

