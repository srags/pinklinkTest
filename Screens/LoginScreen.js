import React, {Component} from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Container, Content, Form, Input, Item, Label, Header, Button } from 'native-base';



export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerLeft: null, 
    }

    constructor(props){
        super(props)
        
        this.state = {
            email:'',
            password:'',
        }
    }

    loginUser=(email,password) => {
        try{
             firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {alert('Invalid email or password. Please try again.')}).then().this.props.navigation.navigate('Loading')
        }
        catch(error){
            console.log(error.toString())
        }
    }
    
    render() {
        return(
                <View style={{ paddingBottom: 20}}>
                    <Image style={{alignSelf:'center', marginTop: Dimensions.get('window').height * 0.1}} source={require('./Assets/tempLogo.png')} />
                    <Form>
                        <Item>
                            <Label>Email</Label>
                            <Input
                              autocorrect={false}
                              autoCapitalize='none'
                              onChangeText={(email) => this.setState({email})}
                            />
                        </Item>
                        <Item>
                            <Label>Password</Label>
                            <Input
                              secureTextEntry={true}
                              autocorrect={false}
                              autoCapitalize='none'
                              onChangeText={(password) => this.setState({password})}
                            />
                        </Item>
                    </Form>
                    <Button style={styles.button}
                          full
                          rounded
                          success
                          onPress={() => this.loginUser(this.state.email, this.state.password)}
                    >
                        <Text>Login</Text>
                    </Button>
                    <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Don't have an account?</Text>
                        <Button style={{backgroundColor: '#00000000'}}
                        onPress={() => this.props.navigation.navigate("SignUpScreen")}
                        >
                            <Text style={{color: 'blue'}}> Sign Up </Text>
                        </Button>
                    </View>
                </View>
        )
    }  
}

const styles = StyleSheet.create({    
  button:{
    marginTop: 10,
    width: Dimensions.get('window').width *0.95,
    alignSelf:'center',
    paddingLeft: 15,
    justifyContent: 'center'
  }
}); 