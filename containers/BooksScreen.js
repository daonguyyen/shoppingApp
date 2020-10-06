import React, {Component} from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Button
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {books} from '../Data'
import Products from '../components/Products'

class BooksScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Products products={books} />
            </View>
        ) 
    }
}

export default BooksScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})