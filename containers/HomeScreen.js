import React, {Component} from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Button
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';



class HomeScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>My Home Page </Text>
                <View style={{padding: 20}}>
                    <Button
                        title = "Electronics"
                        onPress={() => this.props.navigation.navigate("Electronics")}>
                    </Button>
                </View>
                <View style={{padding: 20}}>
                    <Button
                        title = "Books"
                        onPress={() => this.props.navigation.navigate("Books")}>
                    </Button>
                </View>
            </View>
        ) 
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})