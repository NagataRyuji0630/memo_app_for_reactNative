import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: 'white',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2'
    },
});

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