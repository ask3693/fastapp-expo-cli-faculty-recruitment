import React from 'react'
import {
  
    CardItem,
    Text,
    Button,
    Right,
  } from "native-base";
  import { StyleSheet,View  } from "react-native";
function JobPost(props) {
    const {title,description} = props.job.data();
    return (
        <CardItem style={styles.mainContainer}>
             <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button style={styles.applyButton} onPress={()=>{alert('Application Submitted! your exams will be scheduled soon.')}}><Text>Apply </Text></Button>
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
    },
    applyButton:{
        borderRadius:20,
        width:200,
        marginVertical:10
    }
})

export default JobPost
