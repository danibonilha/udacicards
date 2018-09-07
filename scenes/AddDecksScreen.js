import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddDecksScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Decks Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
