import React from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishDetailComponent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomePage (){
    <Stack.Navigator>
        <Stack.Screen name = "Home" component ={Home}/>
    </Stack.Navigator>
    
}

function MenuPage (){
    return(
        <Stack.Navigator> 
            <Stack.Screen name = "Menu" component = {Menu}/>
            <Stack.Screen name = "Dishdetail" component = {Dishdetail}/>
        </Stack.Navigator>
    )
}

const Main = () =>{
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name = "Home " component = {Home} />
                <Drawer.Screen name = "Menu" component= {Menu}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Main;