import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import HomeScreen from './Screens/HomeScreen'
import RequestScreen from './Screens/RequestScreen'


export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
} 


const AppStackNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  RequestScreen: { screen: RequestScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
      
      './Assets/pinklink.png'