import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDtailScreen from './src/screens/MemoDetailScreen';
import MemoDtailScreen from './src/screens/MemoEditScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';


export default class App extends React.Component {
  render() {    
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoEditScreen />
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
