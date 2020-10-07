
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import store from './store';


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
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  )
}


export default App;
