import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {  white, darkPrimaryColor } from '../utils/colors';
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { AddDecksScreen, DecksScreen } from '../scenes';

/* eslint react/display-name: 0 */
export const Tabs = createBottomTabNavigator(
	{
		Decks: {
			screen: DecksScreen,
			navigationOptions: {
				tabBarLabel: 'Decks',
				tabBarIcon: ({ tintColor }) => (
					<MaterialCommunityIcons name="cards-playing-outline" size={30} color={tintColor} />
				)
			}
		},
		AddDeck: {
			screen: AddDecksScreen,
			navigationOptions: {
				tabBarLabel: 'AddDeck',
				tabBarIcon: ({ tintColor }) => (
					<MaterialIcons name="library-add" size={30} color={tintColor} />
				)
			}
		}
	},
	{
		navigationOptions: {
			header: null
		},
		tabBarOptions: {
			activeTintColor: white,
			style: {
				height: 50,
				backgroundColor: darkPrimaryColor
			}
		}
	}
);
