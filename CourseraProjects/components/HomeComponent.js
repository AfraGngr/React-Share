import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';
import { Card } from "react-native-elements"
import {DISHES, LEADERS, PROMOTIONS} from "../shared";

function RenderItem(props){
    const item = props.item;

    if (item != null) {
        return (
            <Card
                featuredTitle = {item.name}
                featuredSubtitle = {item.designation}
                image = {require("./images/buffet.png")}
            >
                <Text style = {{margin:10}}>{item.description}</Text>
            </Card>
        )
    }
}

const Home = (props) => {
    const [dishes, setDishes] = useState(DISHES)
    const [leaders, setLeaders] = useState(LEADERS)
    const [promotions, setPromotions] = useState(PROMOTIONS)

    // const a = leaders.filter((dish) => dish.featured)
    // console.log(a)
    
    return(
        <View>
            <ScrollView>
                <RenderItem item = {dishes.filter((dish) => dish.featured)[0]}/>
                <RenderItem item = {promotions.filter((promo) => promo.featured)[0]}/>
                <RenderItem item = {leaders.filter((lead) => lead.featured)[1]}/>
            </ScrollView>
        </View>
    )
}

export default Home;



