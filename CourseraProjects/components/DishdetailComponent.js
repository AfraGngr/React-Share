import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';


function RenderMenu(props){
    const dish = props.dish

    if (dishID != null){
        <Card 
            featuredTitle={dish.name}
            image = {require("./images/uthappizza.png")}
        >
            <Text>{dish.description}</Text>
        </Card>
    }else {
        return <View></View>
    }
}


const Dishdetail = ()=>{
    const [dishes, setDishes] = useState(DISHES)
    const {dishId} = props.route.params

    return (
        <RenderMenu dish = {dishId} />
    )
}

export default Dishdetail;