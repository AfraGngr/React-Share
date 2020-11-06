import React from 'react';
import {
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList, 
  DrawerItem} from '@react-navigation/drawer';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Icon } from "react-native-elements" ;


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
      <Stack.Screen 
       StackNavigationOptions={({ navigation }) => ({
        title: 'Home',
        headerLeft:() =>{
        <Icon name = "menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} /> }
      })}
      name="Home" 
      component={Home} />
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
      }}
      >
      <Stack.Screen  
        name="Menu" 
        component={Menu}
        options={({ navigation }) => ({
          title: 'Menu',
          headerLeft:() =>{
          <Icon name = "menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} /> }
        })} />
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
      <Stack.Screen 
      name="Contact" 
      component={ContactUs}
      options={({ navigation }) => ({
        title: 'Contact Us',
        headerLeft:() =>{
        <Icon name = "menu"  size={24} color="white" onPress={() => navigation.toggleDrawer()} /> }
      })}/>
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
      <Stack.Screen options={{title: 'About Us'}} 
      name="About" 
      component={About}
      options={({ navigation }) => ({
        title: 'About Us',
        headerLeft:() =>{
        <Icon name = "menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} /> }
      })}/>
    </Stack.Navigator>
  );
}

const CustomDrawerContent = (props) => {
  return(
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image
            style={styles.drawerImage}
            source={require('./images/logo.png')}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  </ScrollView>)
};



const Main = () => {
  return (
    <NavigationContainer style={{flex: 1, paddingTop: 10}}>
      <Drawer.Navigator 
      drawerStyle={{backgroundColor: '#D1C4E9'}}
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
      >
        <Drawer.Screen 
        name="Home" 
        component={HomePage} 
        options ={{
          title : "Home",
          drawerLabel :"Home",
          drawerIcon : ({ tintColor }) => (<Icon name ="home" type= "font-awesome" color={tintColor} size ={24} />)
        }}/>
        <Drawer.Screen 
          name="Menu" 
          component={MenuPage}
          options ={{
            title : "Menu",
            drawerLabel :"Menu",
            drawerIcon : ({ tintColor }) => (<Icon name ="list" type= "font-awesome" color={tintColor} size ={24} />)
          }} />
        <Drawer.Screen 
          name="About Us" 
          component = {AboutUs}
          options ={{
            title : "About Us",
            drawerLabel :"About Us",
            drawerIcon : ({ tintColor }) => (<Icon name ="info" type= "font-awesome" color={tintColor} size ={24} />)
          }}/>
        <Drawer.Screen 
          name="Contact Us" 
          component = {Contact}
          options ={{
            title : "Contact Us",
            drawerLabel :"Contact Us",
            drawerIcon : ({ tintColor }) => (<Icon name ="id-card-o" type= "font-awesome" color={tintColor} size ={24} />)
          }}  
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default Main;

const styles = StyleSheet.create({
  container: {flex: 1},
  drawerHeader: {
    height: 140,
    alignItems: 'center',
    backgroundColor: '#512DA8',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});