import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Stap from './pages/stap';

const Stack = createStackNavigator();

export default class Route extends React.Component{

 render(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Principal' component={Home} />
                <Stack.Screen name='Stap' component={Stap} />
            </Stack.Navigator>
        </NavigationContainer>
    );
   
 }

}