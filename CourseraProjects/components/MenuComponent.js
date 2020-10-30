  
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {DISHES} from '../shared/dishes';

function Menu(props) {
    const [dishes, setDishes] = useState(DISHES)

    function renderMenuItem({item, index}){
        <ListItem
            key = {index}
            title = {item.name}
            subtitle = {item.description}
            onPress ={() => props.navigation.navigate("Dishdetail", {dishId : item.id})}
            leftAvatar={{ source: require('./images/uthappizza.png')}}
        />
    }

    return (
        <FlatList
            data={dishes}
            renderItem={renderMenuItem}
            keyExtractor={(item, index) => item.id.toString()}
        />
    )
}


export default Menu;