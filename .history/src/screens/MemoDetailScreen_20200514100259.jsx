import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleBtn from '../elements/CircleBtn';

const styles = StyleSheet.create({
    containar: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313C',
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    memoHeaderDate: {
        fontSize: 12,
        color: 'white',
    },
    memoContent: {},
});

class MemoDetailScreen extends Component {
    render() {
        return (
            <View style={styles.containar}>
                <View style={styles.memoHeader}>
                    <View>
                        <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
                        <Text style={styles.memoHeaderDate}>2020/05/14</Text>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text>講座のアイデアです。</Text>
                </View>

                <CircleBtn>+</CircleBtn>
            </View>
        );
    }
}

export default MemoDetailScreen;