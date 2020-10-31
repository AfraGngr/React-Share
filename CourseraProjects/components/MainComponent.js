import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishDetailComponent';
import About from "./AboutComponent";
import ContactUs from './ContactComponent';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomePage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen options={{title: 'Home'}} name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function MenuPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen options={{title: 'Menu'}} name="Menu" component={Menu} />
      <Stack.Screen options={{title: 'Dish Details'}} name="Dishdetail" component={Dishdetail}/>
    </Stack.Navigator>
  );
}



function Contact() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen options={{title: 'Contact Us'}} name="Contact" component={ContactUs}/>
    </Stack.Navigator>
  );
}

function AboutUs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen options={{title: 'About Us'}} name="About" component={About}/>
    </Stack.Navigator>
  );
}


const Main = () => {
  return (
    <NavigationContainer style={{flex: 1, paddingTop: 10}}>
      <Drawer.Navigator drawerStyle={{backgroundColor: '#D1C4E9'}}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Menu" component={MenuPage} />
        <Drawer.Screen name="About Us" component = {AboutUs}/>
        <Drawer.Screen name="Contact Us" component = {Contact}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default Main;