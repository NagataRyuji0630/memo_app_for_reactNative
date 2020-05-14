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
        const { style, color } = this.props;

        let bgColor = '#E31675';
        let textColor = 'white';

        if (color === 'white') {
            bgColor = 'white';
            textColor = '#E31675';
        }

        return (
            <View style={[styles.circleBtn, style, { backgroundColor: bgColor }]}>
                <Text style={[styles.circleBtnTitle, { color: color }]}>{this.props.children}</Text>
            </View>
        );
    }
}

export default CircleBtn;
