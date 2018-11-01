import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';
import StarRating from 'react-native-star-rating';
import { StyleSheet, Text, View, TouchableOpacity, Image, ListView, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import offers from './components/offers';
import pending from './components/pending';
import chats from './components/chats';
        
export default createBottomTabNavigator({
    offers:{
        screen: offers,
        navigationOptions: {
            tabBarLabel: 'Offers',
            tabBarIcon:({tintColor})=>(<Icons name='md-person-add' color={tintColor} size={30} />)
        }
    },
                                        
    pending:{
        screen: pending,
        navigationOptions: {
            tabBarLabel: 'Pending',
            tabBarIcon:({tintColor})=>(<Icons name='ios-send' color={tintColor} size={35} />),
        }
    },
    
    chats:{
       screen: chats,
       navigationOptions: {
            tabBarLabel: 'Chats',
            tabBarIcon:({tintColor})=>(<Icons name='ios-chatbubbles' color={tintColor} size={30} />),
        }                                   
    }
                                    
},{
    initialRouteName: 'offers',  
    navigationOptions:{
        tabBarVisible: true
    },
    tabBarOptions:{
        activeTintColor: "black",
        inactiveTintColor: "gray"       
    }    
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },

  data: {
    borderWidth:2,
    backgroundColor: '#FFDBF6',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  }
        
});





