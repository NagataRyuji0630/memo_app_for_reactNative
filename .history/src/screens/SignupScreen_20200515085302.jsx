import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';


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
        padding: 8,
        fontSize: 18,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 24,
    },
    btn: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        backgroundColor: '#E31675',
        width: '70%',
        height: 48,
        borderRadius: 4,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 18,
    }

});


class SignupScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.title}>メンバー登録</Text>
                    <TextInput style={styles.input} value='Email Address' multiline />
                    <TextInput style={styles.input} value='Password' multiline />
                    <TouchableHighlight style={styles.btn} title='通信' onPress={() => {}} underlayColor='#c70ff66'>
                        <Text style={styles.btnTitle}>Login</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

export default SignupScreen;