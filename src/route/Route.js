import MainScreen from '../component/MainScreen'
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import Forget from '../component/Forget';
import DashBoard from './DashBoard';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null,
        },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        },
    },
    Forget: {
        screen: Forget,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: DashBoard,
        navigationOptions: {
            header: null,
        },
    },
    
  })

export default createAppContainer(Route);

