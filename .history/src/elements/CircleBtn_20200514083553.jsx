import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    circleBtn: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#E31675',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circleBtnTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: 'white',
    }
});

class CircleBtn extends Component {
    render() {
        return (
            <View style={styles.circleBtn}>
                <Text style={styles.circleBtnTitle}>+</Text>
            </View>
        );
    }
}

export default CircleBtn;
