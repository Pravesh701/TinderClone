import React from 'react';
//@ts-ignore
import { View, Text, StyleSheet } from 'react-native';

interface Props {

}

const TinderProfile = ({}: Props) => {
    return (
        <View style = {styles.constiner}>
            <Text>Hello Moto!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constiner:{
        flex: 1,
    }
})

export default TinderProfile;
