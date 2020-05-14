import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../src/components/MemoList';
import CircleBtn from '../src/elements/CircleBtn';

class MemoListScreen extends Component {
    render() {
        return (
            <View>
                <AppBar />
                <MemoList />
                <CircleBtn>+</CircleBtn>
            </View>
        );
    }
}

export default MemoListScreen;