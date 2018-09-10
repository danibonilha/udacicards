import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MainNavigator } from './navigation/MainNavigator';
import { store, persistor } from './store/store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<UdaciCards />
				</PersistGate>
			</Provider>
		);
	}
}

const UdaciCards = () => (
	<View style={styles.container}>
		<StatusBar barStyle="light-content" />
		<MainNavigator />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	},
});
