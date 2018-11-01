import React, {Component} from 'react';
import createStackNavigator from 'react-navigation';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ListView} from 'react-native';
import{Container, Form, Content, Input, Item, Button, Label} from 'native-base'

export default class SignUpScreen extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = ({
            email:'',
            password:'',
            displayName:[],
            cpassword:''
        })
    }
    
    
    writeUserData( userID, name, email) {
        firebase.database().ref('users/' + userID ).set({
            username: name,
            email: email,
        });
    }
    
    signUpUser=(email, password) => {
        try{
            if (this.state.password.length<6){
                
                alert("Please enter at least 6 characters.")
                return;
            }
             
            firebase.auth().createUserWithEmailAndPassword(email, password).then().this.props.navigation.navigate('Loading')
            
        }
        
        catch(error){
            console.log(error.toString())
        }
    }
    
    signingUp() {
        this.confirmPass();
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.writeUserData(firebase.auth().currentUser.uid,this.state.displayName, firebase.auth().currentUser.email);
            }
        });
    }
    
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner />;    
        }
    }
    
    confirmPass=()=>{
        if (this.state.password !== this.state.cpassword){
            alert('Passwords do not match up');
        }else{
            this.signUpUser(this.state.email, this.state.password)
        } 
    }
        

    render() {
        return(
            <Container style={styles.container}>
                <Form>
                    <Item>
                    <Label>Name</Label>
                    <Input
                      autocorrect={false}
                      autoCapitalize='none'
                      onChangeText={(displayName) => this.setState({displayName})}
                    />
                    </Item>
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
                    <Item>
                    <Label>Comfirm Password</Label>
                    <Input
                      secureTextEntry={true}
                      autocorrect={false}
                      autoCapitalize='none'
                      onChangeText={(cpassword) => this.setState({cpassword})}
                    />
                    </Item>
            
                </Form>
                <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Button style={styles.button}
                    full
                    rounded  
                    onPress={() => this.signingUp() }         
                    >
                    <Text style={{color: 'white'}}> Sign Up</Text>
                    </Button>
                    {this.renderButtonOrSpinner()}
                </View>
            </Container>    
        )
    }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight:10
  },
    
  button:{
    marginTop: 10,
    width: Dimensions.get('window').width *0.95,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 