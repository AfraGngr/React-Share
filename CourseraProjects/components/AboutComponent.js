import React, { useState } from 'react';
import { FlatList, ScrollView, Text} from 'react-native';
import { Card, ListItem } from "react-native-elements"
import { LEADERS } from "../shared";



const About  = () => {
    const [leaders, setLeaders] = useState( LEADERS)

    const renderLeaders = ({index, item}) =>{
        return(
           <ListItem
                    key = {index}
                    title = {item.name}
                    subtitle = {item.description}
                    leftAvatar={{ source: require('./images/alberto.png')}}
                />
        )
    }

    function History(){
        return(
            <Card>
                <Card.Title>Our History</Card.Title>
                <Card.Divider/>
                <Text style={{margin : 5}}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                </Text>
                <Text style={{margin : 5}}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                </Text>
            </Card>
        )
    }

    return(
        <ScrollView>
            <History/>
            <Card>
                <Card.Title>Corporate Leadership</Card.Title>
                <Card.Divider/>
                    <FlatList
                        data = {leaders}
                        renderItem = {renderLeaders}
                        keyExtractor={(item, index) => item.id.toString()}
                    />
        </Card>
        </ScrollView>
    )
}

export default About;