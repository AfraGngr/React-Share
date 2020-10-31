import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from "react-native-elements"

const ContactUs = () => {
        return (
            <Card>
                <Card.Title>Contact Us</Card.Title>
                <Card.Divider/>
                    <Text style = {styles.text}>121, Clear Water Bay Road</Text>
                    <Text style = {styles.text}>Clear Water Bay, Kowloon</Text>
                    <Text style = {styles.text}>HONG KONG</Text>
                    <Text style = {styles.text}>Tel: +852 1234 5678</Text>
                    <Text style = {styles.text}>Fax: +852 8765 4321</Text>
                    <Text style = {styles.text}>Email:confusion@food.net</Text>
            </Card>
            );
        };

export default ContactUs;

const styles = StyleSheet.create({
    text :{
        margin : 2
    }
})