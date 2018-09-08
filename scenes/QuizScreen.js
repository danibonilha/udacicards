import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from '../components';
import { black } from '../utils/colors';

export default class QuizScreen extends Component {
  static navigationOptions = () => {
    return {
      title: "Quiz"
    };
  };

  render() {
    //const { questions } = this.props.navigation.state.params.deck;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, margin: 10 }}>
          <Card
            card={{
              question: 'The combination of a function and the lexical environment within which that function was declared.'
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            label="Got it! 🤓"
            disabled={true}
          />
          <Button
            label="Oops! 😭"
            disabled={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    justifyContent: "center"
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
