import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    input: {
        backgroundColor: '#ddd',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd'
    }

});


class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <TextInput style={styles.input} value='Email' multiline />
                    <TextInput style={styles.input} value='Password' multiline />
                    <Button title='通信' onPress={() => {}}/>
            </View>
        );
    }
}

export default LoginScreen;