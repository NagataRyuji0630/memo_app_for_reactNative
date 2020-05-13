import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleBtn from './src/elements/CircleBtn';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />

        <MemoList />

        <CircleBtn>+</CircleBtn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
