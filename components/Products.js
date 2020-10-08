import React, {Component} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

class Products extends Component{

    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <View key={index} style={{padding: 20}}>
                    <Button onPress={() => this.props.onPress(item) }
                        title={item.name + " - " + item.price}
                    ></Button>
                </View>
            )  
        })
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                {this.renderProducts(this.props.products)}
            </View>
        )
    }
}

export default Products

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})