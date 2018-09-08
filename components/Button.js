import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { textprimaryColor, defaultPrimaryColor } from "../utils/colors";

export const Button = ({ label, onPress, disabled }) => (
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultPrimaryColor,
    margin: 25,
    borderRadius: 12,
    justifyContent: "center"
  },
  label: {
    color: textprimaryColor,
    fontSize: 25,
    padding: 12,
    textAlign: "center"
  },
  disabled: {
    backgroundColor: "#808080",
  }
});
