import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button, 
    TouchableOpacity,
    Image
} from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("RequestScreen")}>
                    <Image source={require('./Assets/pinklink.png')} style={styles.image}/>
                </TouchableOpacity>
            <Text> Click here to request. </Text>
            </View>
        );
    }
}

export default HomeScreen;

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
                                    
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 100,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
}); 



// /*<Image source={require('./Assets/pinklink') style={styles.image}}/>*/

/*class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={()=>{alert("Go to Request page.")}}>
                    <Image source={require("./Assets/pinklink.png") style={styles.image}}/>
                </TouchableOpacity>
                <Text>Request a pad or tampon.</Text>
            </View>
        );
    }
}

<TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("RequestScreen")}>
                    <Image source={require('./Assets/pinklink.png') style={styles.image}}/>
                </TouchableOpacity>
                
*/

