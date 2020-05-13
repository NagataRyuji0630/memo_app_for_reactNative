import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMO</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講義のアイデア</Text>
            <Text style={styles.memoTitle}>2020/5/13</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講義のアイデア</Text>
            <Text style={styles.memoTitle}>2020/5/13</Text>
          </View>
        </View>

        <View>
          <Text>+</Text>
        </View>
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
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  memoList: {
    backgroundColor: '#eee',
    width: '100%',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
});
