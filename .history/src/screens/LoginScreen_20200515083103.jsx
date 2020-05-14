import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({

});


class LoginScreen extends Component {
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