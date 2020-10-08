import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import cartItems from '../reducers/cartItem'
import ShoppingCart from '../ShoppingCart'
import { connect } from 'react-redux'

class ShoppingCartIcon extends Component {
    
    render() {
        return (
            <View style={{ padding: 5 }}>
                <View style={{
                    position: 'absolute',
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: 'rgba(95,197,123,0.8)',
                    right: 20,
                    bottom: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        {this.props.cartItems.length}
                    </Text>
                </View>
                <Icon onPress={()=> this.props.navigation.navigate("Cart")} name="ios-cart" size={30} color="#fff" />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(ShoppingCartIcon);

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        // alignItems : 'center',
        // justifyContent : 'center'
        color: "#fff"
    }
})