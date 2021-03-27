import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import MyTeam from './Screen/MyTeam';
import Photo from './Screen/PhotoGallery';
import Viedo from './Screen/ViedoGallery';
import Cateror from './Screen/Catering';
import Decorator from './Screen/Decorator';
import Login from './Screen/Login';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const AppNavigatorCD= createBottomTabNavigator({
 Cateror : {screen:Cateror},
 Decorator : {screen : Decorator}
});

const AppNavigator = createBottomTabNavigator({
  Home: { screen: MyTeam },
  PhotoGallery: { screen: Photo },
  ViedoGallery: { screen: Viedo },
});
const StackNavigator = createStackNavigator({
  PYP : {screen:MyTeam,
  navigationOptions:{
    headerShown:false
  }
  },
  CD :{screen:AppNavigatorCD,
    navigationOptions:{
      headerShown:false
    }
  }
 })
const SwitchNavigator = createSwitchNavigator({
  Login:{screen:Login},
  AppNav :{screen:AppNavigator},
  Stack: {screen:StackNavigator}
})


const AppContainer = createAppContainer(SwitchNavigator)
