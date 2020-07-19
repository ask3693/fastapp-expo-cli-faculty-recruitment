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
function JobPost(props) {
    const {title,description,uid} = props.job.data();
    const {id}  = props.job;
    return (
        <CardItem style={styles.mainContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        </View>
        <Right>
        <View style={styles.iconsContainer}>
        <Icon type="MaterialIcons"   name="edit" style={{fontSize: 30,marginRight:10 }}/>
        <Icon type="MaterialIcons" onPress={()=> props.onDeleteClick(id)}   name="delete" style={{fontSize: 30, color: 'red'}}/>
      
        </View>
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
