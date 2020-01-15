import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

const {width: WIDTH} = Dimensions.get('window')
export default class Profile extends React.Component {
    render(){
        return (
            <View style={styles.container}>
            <ImageBackground source = {require('./../image/background.png')} style = {{width: '100%', height: '100%'}} resizeMode= 'stretch'>
                <View style = {{backgroundColor: '#000', height: '4%'}}></View>
                <View style = {{ marginTop: 15, height: '10%', flexDirection: 'row' }}>
                    <View style = {{marginLeft: 20}}>
                        <Icon  name = 'menu' color = '#FFA726' size = {35} 
                    onPress={
                        () => this.props.navigation.openDrawer()
                      }/>
                    </View>
                    <View style = {{marginTop: 5, }}>
                        <Text style = {{fontSize: 20, marginLeft: 95, fontWeight: 'bold', color: '#fff'}}>Profile</Text>
                    </View>
                </View>
                <View style = {{flexDirection: 'column', marginBottom: 40}}>
                    <View style={{ justifyContent:'center', alignItems: 'center',}}>
                        <Image source={require('./../image/user1.png')} style={{alignSelf: 'center', width: 50, height: 50}}></Image>
                    </View>
                    <View style = {{justifyContent:'center', alignItems: 'center'}}>
                        <Text style = {{fontSize: 20, alignSelf: 'center', fontWeight: 'bold', marginTop: 15, color: '#fff'}}>Alex Rowe</Text>
                        <Text style = {{fontSize: 20, alignSelf: 'center', color: '#fff'}}>Spain</Text>
                    </View>
                </View>
                <View style = {{flexDirection: 'row', marginLeft: 20, marginTop: -30}}>
                    <View style = {{height: 40, backgroundColor: '#F2934F', width: 100, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}} style={{}}>
                            <Text style = {{fontSize: 15, color: '#fff'}}>Followers</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{height: 40, backgroundColor: '#33cccc', marginLeft: 10, width: 100, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}} style={{}}>
                            <Text style = {{fontSize: 15, color: '#fff'}}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{height: 40, backgroundColor: '#cc6600', marginLeft: 10, width: 100, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}} style={{}}>
                            <Text style = {{fontSize: 15, color: '#fff'}}>Following</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{backgroundColor: '#EAEAEAEA', marginTop: 30, alignItems: 'center', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>Email</Text>
                </View>
                <View style = {{ padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{fontSize: 18, alignSelf: 'center', color: '#fff'}}>example@gmail.com</Text>
                </View>
                <View style = {{backgroundColor: '#EAEAEAEA',  alignItems: 'center', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', alignSelf: 'center',}}>Number</Text>
                </View>
                <View style = {{ padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{fontSize: 18, alignSelf: 'center', color: '#fff'}}>+92 236 4569875</Text>
                </View>
                <View style = {{backgroundColor: '#EAEAEAEA', width: '100%', height: '100%'}}>
                
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