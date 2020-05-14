import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
      flex: 1,
        width: '100%'
    },
  });
  

class MemoEditScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoEditInput}>
                    <Text>hi</Text>
                </View>
                <CircleBtn  name='check' />
            </View>
        );
    }
}

export default MemoEditScreen;