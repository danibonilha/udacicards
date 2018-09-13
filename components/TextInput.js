import React from 'react';
import { StyleSheet, TextInput as Input } from 'react-native';
import PropTypes from 'prop-types';
import { textprimaryColor } from '../utils/colors';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		color: textprimaryColor,
		fontSize: 35,
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
	fontSize,
	autoFocus = true
}) => (
	<Input
		onChangeText={onChangeText}
		style={[styles.container, fontSize && { fontSize }]}
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
	fontSize: PropTypes.number.isRequired,
	multiline: PropTypes.bool,
	autoFocus: PropTypes.bool
};