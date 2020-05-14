import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingRight: 16,
        paddingLeft: 16,
        paddingBottom: 16,
        fontSize: 16,
    },

});


class MemoEditScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <TextInput style={styles.memoEditInput} value='hi' multiline />
                <CircleBtn name='check' />
            </View>
        );
    }
}

export default MemoEditScreen;