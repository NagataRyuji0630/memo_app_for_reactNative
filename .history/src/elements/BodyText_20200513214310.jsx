import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends Component {
    render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#ddd',
    }
});

export default BodyText;