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
    }

});


class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <TextInput style={styles.input} value='hi' multiline />
                    <TextInput style={styles.input} value='hi' multiline />
                    <Button title='通信' onPress={() => {}}/>
            </View>
        );
    }
}

export default LoginScreen;