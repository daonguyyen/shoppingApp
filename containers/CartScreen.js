import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Products from '../components/Products'
import { connect } from 'react-redux'
class CartScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                { this.props.cartItems.length > 0 ?
                <Products products={this.props.cartItems} />
                : <Text>No items in your cart</Text>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(CartScreen)

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})