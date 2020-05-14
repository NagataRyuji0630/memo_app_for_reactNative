import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }

});


class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <TextInput style={styles.memoEditInput} value='hi' multiline />
                    <TextInput style={styles.memoEditInput} value='hi' multiline />
                    <Button title='通信' />
            </View>
        );
    }
}

export default LoginScreen;