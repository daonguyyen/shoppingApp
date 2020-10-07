import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BooksScreen from './containers/BooksScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import HomeScreen from './containers/HomeScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from './containers/CartScreen';

const Stack = createStackNavigator();

const ShoppingCart = () => {
    return (
          <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerTitle: 'Shopping App',
            headerStyle: {
              backgroundColor: '#009387',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerRight : () => (
              <ShoppingCartIcon />
            )
          }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Electronics" component={ElectronicsScreen} />
            <Stack.Screen name="Books" component={BooksScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
}

export default ShoppingCart