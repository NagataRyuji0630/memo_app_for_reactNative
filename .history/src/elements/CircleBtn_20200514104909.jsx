import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Font } from 'expo';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const styles = StyleSheet.create({
    circleBtn: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
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
    }
});

class CircleBtn extends Component {
    componentDidMount() {
        Font.loadAsync({
            fontAwsome: fontAwsome,
        });
    }
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
                <Text style={[styles.circleBtnTitle, { color: textColor }]}>{this.props.children}</Text>
            </View>
        );
    }
}

export default CircleBtn;