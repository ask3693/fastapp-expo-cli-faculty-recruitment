import React from 'react'
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Right,
  } from "native-base";
  import { StyleSheet,View  } from "react-native";
function JobPost() {
    return (
        <CardItem style={styles.mainContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.heading}>Web developer</Text>
        <Text style={styles.description}>Fugiat in officia sint ea reprehenderit nulla ut. Quis sit minim dolor labore sint enim mollit </Text>
        </View>
        <Right>
        </Right>
      </CardItem>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        borderBottomWidth:1,
        borderBottomColor:'black',
    },
    textContainer:{
        flex:1,
        flexDirection:'column',
      
    },  
    iconsContainer:{
        flex:1,
        flexDirection:'row',
        alignContent:'space-between'
    },
    heading:{
        fontSize:22
    },
    description:{
        fontSize:10
    }
})

export default JobPost
