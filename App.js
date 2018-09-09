import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { MainNavigator } from './navigation/MainNavigator';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<MainNavigator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	},
});
