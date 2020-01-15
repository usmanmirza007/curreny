import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
const {width: WIDTH} = Dimensions.get('window')

export default class LTCWallet extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style = {{backgroundColor: '#000', height: '4%'}}></View>
                <View style = {{height: '10%', backgroundColor: '#263238',}}>
                    <View style = {{ marginTop: 15, height: '15%', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style = {{marginLeft: 20}}>
                            <Icon  name = 'menu' color = '#fff' size = {35} 
                        onPress={
                            () => this.props.navigation.openDrawer('homeFlow')
                        }/>
                        </View>
                        <View style = {{marginTop: 5}}>
                            <Text style = {{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Bitcoin</Text>
                        </View>
                        <View style = {{marginRight: 20, marginTop: 7}}>
                            <Text style = {{fontSize: 15, color: '#fff'}} onPress={()=>{this.props.navigation.navigate('home')}}>Send</Text>
                        </View>
                    </View>
                </View>
                <ImageBackground source = {require('./../image/background.png')} style = {{width: '100%', height: '100%'}} resizeMode= 'stretch'>
                <View style = {{ justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <View style = {{ borderBottomWidth: 3, borderBottomColor: '#FFA726', width: '40%',  }}>
                        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}> 
                            <Text style = {{fontSize: 18, color: '#fff',}}>Balance</Text>     
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center',  marginTop: 5 }}> 
                        <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#fff',}}>423.020000 LTC</Text>
                    </View>
                </View>
                <View style = {{backgroundColor: '#EAEAEAEA', marginTop: 30, alignItems: 'center', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>Transactions</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#263238', height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 20, marginRight: 20, borderRadius: 5}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 15, justifyContent:'center',}}>
                                <Image source = {require('./../image/Logo4.png')} style = {{width: 50, height: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>BTC Send To</Text>
                                <Text style = {{fontSize: 15, color: '#fff', alignSelf: 'flex-start'}}>KFJ23DSRG25F5D</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 55}}>
                                <Text style = {{fontSize: 15, color: '#fff'}}>10 BTC</Text>
                                <Text style = {{ fontSize: 15, color: '#fff', alignSelf: 'flex-end'}}>0.004</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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