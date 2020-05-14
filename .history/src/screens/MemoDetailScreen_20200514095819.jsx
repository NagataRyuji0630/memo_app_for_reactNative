import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleBtn from '../elements/CircleBtn';

const styles = StyleSheet.create({
    memoHeader: {},
    memoHeaderTitle: {},
    memoHeaderDate: {},
    memoContent: {},
});

class MemoDetailScreen extends Component {
    render() {
        return (
            <View>
                <View style={styles.memoHeader}>
                    <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
                    <Text style={styles.memoHeaderDate}>2020/05/14</Text>
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