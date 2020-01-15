import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
export default class OrderBuy extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style = {{backgroundColor: '#000', height: '4%'}}></View>
                <View style = {{height: '10%', backgroundColor: '#263238',}}>
                    <View style = {{ marginTop: 15,  flexDirection: 'row' }}>
                        <View style = {{marginLeft: 20}}>
                            <Icon  name = 'menu' color = '#fff' size = {35} 
                        onPress={
                            () => this.props.navigation.openDrawer()
                        }/>
                        </View>
                        <View style = {{marginTop: 5,  }}>
                            <Text style = {{fontSize: 20, marginLeft: 75, fontWeight: 'bold', color: '#fff'}}>Buy Order</Text>
                        </View>
                    </View>
                </View>
                <ImageBackground source = {require('./../image/background.png')} style = {{width: '100%', height: '100%'}} resizeMode= 'stretch'>
                <Text style = {{padding: 20, fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Amount:</Text>
                <View style = {{padding: 20,}}>
                    <View style = {{backgroundColor: '#EAEAEAEA', alignItems: 'center', marginTop: -25, height: 50, flexDirection: 'row'}}>
                        <View>
                            <Text style = {{fontSize: 18, fontWeight: 'bold', marginLeft: 20,}}>Bitcoin</Text>
                        </View>
                        <View>
                            <Text style = {{borderLeftWidth: 3, borderLeftColor: '#B2B2B2', height: 30, marginLeft: 70}}></Text>
                        </View>
                        <View>
                            <TextInput
                                style={{ height: 40, marginRight: 10, marginLeft: 30, textAlign: 'right'}}
                                placeholder = 'Enter ypur bitcoin'
                                keyboardType = {"numeric"}
                                placeholderTextColor = {'#FFA726'}
                                maxLength = {16}
                            />
                        </View>
                    </View>
                </View>
                <Text style = {{padding: 20, fontSize: 18, fontWeight: 'bold', marginTop: -20, color: '#fff'}}>Price:</Text>
                <View style = {{padding: 20,}}>
                    <View style = {{backgroundColor: '#EAEAEAEA', alignItems: 'center', marginTop: -25, height: 50, flexDirection: 'row'}}>
                        <View>
                            <Text style = {{fontSize: 18, fontWeight: 'bold', marginLeft: 20,}}>Price</Text>
                        </View>
                        <View>
                            <Text style = {{borderLeftWidth: 3, borderLeftColor: '#B2B2B2', height: 30, marginLeft: 85}}></Text>
                        </View>
                        <View>
                            <TextInput
                                style={{ height: 40, marginRight: 10, marginLeft: 30, textAlign: 'right'}}
                                placeholder = 'Enter ypur price'
                                keyboardType = {"numeric"}
                                placeholderTextColor = {'#FFA726'}
                                maxLength = {16}
                            />
                        </View>
                    </View>
                </View>
                <View style = {{backgroundColor: '#555555', height: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{ borderBottomWidth: 3, borderBottomColor: '#7B7B7B', width: '90%',  }}>
                        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}> 
                            <Text style = {{fontSize: 18, color: '#fff', marginLeft: 40,  marginRight: 20}}>fees:</Text>
                            <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#fff',}}>0.0001 USD</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center', marginRight: 30, marginTop: 5 }}> 
                        <Text style = {{fontSize: 18, color: '#fff',  marginRight: 20}}>Total Amount:</Text>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#fff',}}>0.0001 USD</Text>
                    </View>
                </View>
                <View style = {{ alignItems: 'center'}}>
                    <View style = {{width: 250,   marginTop: 40, marginBottom: 40 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignI')}} style={{borderRadius: 5, backgroundColor: '#263238', marginVertical: height(2),}}>
                        <View style = {{ height: 50,  }}>
                        <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 18, fontSize: 20,  color: '#FFA726'}}>BUY</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
            </View>
          );
    }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});