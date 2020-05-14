import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});

class MemoListScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MemoList />
                <CircleBtn>+</CircleBtn>
            </View>
        );
    }
}

export default MemoListScreen;