
import { createStackNavigator } from 'react-navigation';
import { Tabs } from './Tabs';
import { darkPrimaryColor, textprimaryColor } from '../utils/colors';


export const MainNavigator = createStackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			title: 'UdaciCards',
			headerStyle: {
				backgroundColor: darkPrimaryColor,
			},
			headerTintColor: textprimaryColor,
			headerTitleStyle: {
				fontWeight: 'bold',
			},

		},

	},

});
