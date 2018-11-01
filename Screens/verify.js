import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import firebase from 'firebase';

export default class emailVerification extends React.Component{
   /* firebase.auth().currentUser.sendEmailVerification()*/

   render(){
      return(
          
        <View style={{alignItems:'center', justifyContent:'center', paddingTop: 20}}>
            <Text style={{fontSize: 20}}> Email sent. </Text>
            <Text style={{paddingTop:20 }}>Click on the link to confirm your email.  </Text>
            <Text> Current Verification Status: False </Text>
        </View>
      )
   } 
    
}

const styles = StyleSheet.create({    
  button:{
    marginTop: 10,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 