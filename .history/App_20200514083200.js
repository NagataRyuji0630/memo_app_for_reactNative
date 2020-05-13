import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <AppBar />

        <MemoList />

        <View style={styles.memoAddBtn}>
          <Text style={styles.memoAddBtnTitle}>+</Text>
        </View>

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
  memoAddBtn: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31675',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  memoAddBtnTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: 'white',
  }
});
