import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: 'white',
    },
    input: {
        backgroundColor: '#ddd',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 24,
    }

});


class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.title}>ログイン</Text>
                    <TextInput style={styles.input} value='Email' multiline editable />
                    <TextInput style={styles.input} value='Password' multiline editable />
                    <Button title='通信' onPress={() => {}}/>
            </View>
        );
    }
}

export default LoginScreen;