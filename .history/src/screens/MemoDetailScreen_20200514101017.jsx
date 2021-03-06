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
        paddingLeft: 10,
        backgroundColor: '#17313C',
        justifyContent: 'center',
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 4
    },
    memoHeaderDate: {
        fontSize: 12,
        color: 'white',
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
        backgroundColor: 'white',
    },
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

                <CircleBtn style={styles.editBtn}>+</CircleBtn>
            </View>
        );
    }
}

export default MemoDetailScreen;