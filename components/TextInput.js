import React from 'react';
import { StyleSheet, TextInput as Input } from 'react-native';
import PropTypes from 'prop-types';
import { textprimaryColor } from '../utils/colors';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		color: textprimaryColor,
		backgroundColor: '#4c4c4c',
		margin: 25,
		borderRadius: 4,
		padding: 8,
		textAlign: 'center',
		textAlignVertical: 'center'
	}
});

export const TextInput = ({
	multiline = false,
	onChangeText,
	value,
	fontSize = 35,
	autoFocus = true
}) => (
	<Input
		onChangeText={onChangeText}
		style={[styles.container, { fontSize }]}
		autoFocus={autoFocus}
		underlineColorAndroid="transparent"
		multiline={multiline}
		returnKeyType="done"
		blurOnSubmit={true}
		value={value}
	/>
);

TextInput.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	fontSize: PropTypes.number,
	multiline: PropTypes.bool,
	autoFocus: PropTypes.bool
};