import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFDF6',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 78,
    },
  });
  

class MemoEditScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoEditInput}>
                    <Text>hi</Text>
                </View>
            </View>
        );
    }
}

export default MemoEditScreen;