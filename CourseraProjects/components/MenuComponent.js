import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {DISHES} from '../shared/dishes';

function Menu(props) {
  const [dishes, setDishes] = useState(DISHES);

  // static navigationOptions = {
  //   title="Menu"
  // }

  const renderMenuItem = ({item, index}) => {
    return (
        <ListItem
        key = {index}
        title = {item.name}
        subtitle = {item.description}
        onPress ={() => props.navigation.navigate("Dishdetail", {dishId : item.id})}
        leftAvatar={{ source: require('./images/uthappizza.png')}}
    />)}

  return (
        <FlatList
         data={dishes}
         renderItem={renderMenuItem}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
}

export default Menu;