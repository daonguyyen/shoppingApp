/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'



// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title = "Go to details screen"
//         onPress={() => navigation.navigate("Details")}>
//       </Button>
//     </View>
//   );
// };

// const DetailScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title = "Go to details screen ... again"
//         onPress={() => navigation.push("Details")}>
//       </Button>
//       <Button
//         title = "Go to home screen"
//         onPress={() => navigation.navigate("Home")}>
//       </Button>
//       <Button
//         title = "Go to back"
//         onPress={() => navigation.goBack()}>
//       </Button>
//       <Button
//         title = "Go to the first screen"
//         onPress={() => navigation.popToTop()}>
//       </Button>
//     </View>
//   );
// };

const Stack = createStackNavigator();

const App = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
