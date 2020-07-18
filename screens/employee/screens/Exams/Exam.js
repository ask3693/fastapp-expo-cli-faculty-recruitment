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
    Button
  } from "native-base";
  import { StyleSheet,View  } from "react-native";
function JobPost() {
    return (
        <CardItem style={styles.mainContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.heading}>PHP</Text>
        <Text style={styles.description}>Fugiat in officia sint ea reprehenderit nulla ut. Quis sit minim dolor labore sint enim mollit </Text>
        <Button style={styles.questionsButton}><Text>Manage Questions</Text></Button>
        </View>
        <Right>
        <View style={styles.iconsContainer}>
        <Icon type="MaterialIcons"   name="edit" style={{fontSize: 30,marginRight:10 }}/>
        <Icon type="MaterialIcons"   name="delete" style={{fontSize: 30, color: 'red'}}/>
      
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
    },
    questionsButton:{
        borderRadius:20,
        width:200,
        marginVertical:10
    }
})

export default JobPost
