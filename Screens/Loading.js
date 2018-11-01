import React, {Component} from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase'

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, paddingBottom:20}}>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  
  componentDidMount=()=>{
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'HomeScreen':'LoginScreen')
    }) 
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})