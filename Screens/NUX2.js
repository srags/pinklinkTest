import React, {Component} from 'react';
import createStackNavigator from 'react-navigation';

import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ListView} from 'react-native';
import{Container, Form, Content, Input, Item, Button, Label} from 'native-base';

export default class NUX2 extends React.Component {
    constructor(props){
            super(props)

            this.state = ({
                email:'',
                password:'',
            })
        }
                                                                            

     render() {
            return(
                <Container style={styles.container}>
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
                    <View style={{paddingTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Button style={styles.button}
                        full
                        rounded   
                        onPress = {() => this.logInWithFacebook() }
                        >
                        <Text style={{color: 'white'}}> Sign In</Text>
                        </Button>
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