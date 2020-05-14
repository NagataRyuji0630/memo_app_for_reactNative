import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const glyphMap = {
    pencile: '\uf303',
    plus: '\uf067',
};

const CustomIcon = createIconSet(glyphMap, 'fontAwsome');

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
        fontSize: 24,
        lineHeight: 24,
        fontFamily: 'fontAwsome',
    }
});


class CircleBtn extends Component {

    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
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
                {
                    this.state.fontsLoaded
                        ?
                        <CustomIcon style={[styles.circleBtnTitle, { color: textColor }]} />

                        :
                        null
                }
            </View>
        );
    }
}

export default CircleBtn;
