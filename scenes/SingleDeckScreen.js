import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SingleDeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck.title
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.deck.title}</Text>
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
