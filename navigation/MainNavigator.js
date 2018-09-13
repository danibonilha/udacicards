import { createStackNavigator } from 'react-navigation';
import { Tabs } from './Tabs';
import { darkPrimaryColor, textprimaryColor } from '../utils/colors';
import {
	SingleDeckScreen,
	AddCardScreen,
	QuizScreen,
	ScoreScreen
} from '../scenes';

export const MainNavigator = createStackNavigator(
	{
		Home: {
			screen: Tabs,
			navigationOptions: {
				title: 'UdaciCards'
			}
		},
		SingleDeck: {
			screen: SingleDeckScreen,
			navigationOptions: {
				title: 'Deck'
			}
		},
		AddCard: {
			screen: AddCardScreen,
			navigationOptions: {
				title: 'Create Card'
			}
		},
		Quiz: {
			screen: QuizScreen,
			navigationOptions: {
				title: 'Quiz'
			}
		},
		Score: {
			screen: ScoreScreen,
			navigationOptions: {
				title: 'Check Score'
			}
		}
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: darkPrimaryColor,
				borderBottomWidth: 0
			},
			headerTintColor: textprimaryColor,
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);
