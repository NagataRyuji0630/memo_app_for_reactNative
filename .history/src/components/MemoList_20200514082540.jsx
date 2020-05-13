import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends Component {
    render() {
        return (
            <View>
                <View style={styles.memoList}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講義のアイデア</Text>
                        <Text style={styles.memoDate}>2020/5/13</Text>
                    </View>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講義のアイデア</Text>
                        <Text style={styles.memoDate}>2020/5/13</Text>
                    </View>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講義のアイデア</Text>
                        <Text style={styles.memoDate}>2020/5/13</Text>
                    </View>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講義のアイデア</Text>
                        <Text style={styles.memoDate}>2020/5/13</Text>
                    </View>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講義のアイデア</Text>
                        <Text style={styles.memoDate}>2020/5/13</Text>
                    </View>
                </View>
            </View >
        );
    }
}

export default MemoList;