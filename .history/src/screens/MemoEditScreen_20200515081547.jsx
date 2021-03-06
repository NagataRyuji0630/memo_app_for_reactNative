import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
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
    },

});


class MemoEditScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoEditInput}>
                    <TextInput
                        ref={component => _textInput = component}
                        style={{ height: 50, width: 200, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc' }}
                    />
                </View>
                <CircleBtn name='check' />
            </View>
        );
    }
}

export default MemoEditScreen;