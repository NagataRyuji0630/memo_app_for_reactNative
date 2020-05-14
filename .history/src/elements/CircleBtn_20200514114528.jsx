import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
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

let customFonts = {
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  };

class CircleBtn extends Component {

    state = {
        fontsLoaded: false,
      };
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
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
                <Text style={[styles.circleBtnTitle, { color: textColor }]}>{this.props.children}</Text>
            </View>
        );
    }
}

export default CircleBtn;
