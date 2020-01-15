import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class MainScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={
                () => this.props.navigation.navigate('SignIn')
              }
            >
              <Text style = {styles.buttonText}> Go To SignIn </Text>
            </TouchableOpacity>

              
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F07638',
  }

});
