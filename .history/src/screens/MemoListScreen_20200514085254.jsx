import React from 'react';
import { Component } from 'react';
import { StyleSheet ,View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleBtn from '../elements/CircleBtn';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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