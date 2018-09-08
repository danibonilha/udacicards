import React from "react";
import { StyleSheet, TextInput as Input } from "react-native";
import { textprimaryColor } from "../utils/colors";

export const TextInput = ({
  multiline = false,
  onChangeText, value,
  fontSize,
  autoFocus = true
}) => (
    <Input
      onChangeText={onChangeText}
      style={[styles.container, fontSize && { fontSize }]}
      autoFocus={autoFocus}
      underlineColorAndroid="transparent"
      multiline={multiline}
      value={value}
    />
  );

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    color: textprimaryColor,
    fontSize: 35,
    backgroundColor: "#4c4c4c",
    margin: 25,
    borderRadius: 4,
    padding: 8,
    textAlign: "center",
    textAlignVertical: "center"
  }
});
