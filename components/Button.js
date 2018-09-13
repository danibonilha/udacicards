import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { textprimaryColor, defaultPrimaryColor, black } from '../utils/colors';

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultPrimaryColor,
		margin: 25,
		borderRadius: 12,
		justifyContent: 'center',
		shadowOffset: { width: 2, height: 2 },
		shadowColor: black,
		shadowOpacity: 0.4,
		elevation: 5
	},
	label: {
		color: textprimaryColor,
		fontSize: 25,
		padding: 12,
		textAlign: 'center'
	},
	disabled: {
		backgroundColor: '#808080',
	}
});

export const Button = ({ label, onPress, disabled = false }) => (
	<TouchableOpacity
		onPress={onPress}
		style={[styles.container, disabled && styles.disabled]}
		disabled={disabled}
	>
		<Text
			style={styles.label}
		>
			{label}
		</Text>
	</TouchableOpacity>
);

Button.propTypes = {
	disabled: PropTypes.bool,
	label: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
};