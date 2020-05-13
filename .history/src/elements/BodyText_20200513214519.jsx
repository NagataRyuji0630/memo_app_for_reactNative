import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#ddd',
        backgroundColor: '#eee',
    },
});

export default BodyText;