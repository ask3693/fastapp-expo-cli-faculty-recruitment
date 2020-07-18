import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Text,Header, Button, Icon, Fab } from "native-base";
import JobPost from './JobPosts'
import JobPosts from "./JobPosts";
class JobOpenings extends PureComponent {
  render() {
    return (
     
        <View style={styles.mainContainer}>
          <Text style={styles.mainHeading} >Job Openings </Text>
         
            <JobPosts />
            {/* <Fab
          // style={{ backgroundColor: COLORS.primary }}
          position="bottomRight"
          // onPress={onPress}
        >
          <Icon name="add" />
        </Fab> */}
        </View>
        
    
    );
  }
}
const styles = StyleSheet.create({
    mainHeading:{
        fontSize:40,
        marginTop:'10%'
    },  
  mainContainer: {
   
    flex: 1,
    width: "100%",
   
   alignItems:'center'
  },
  buttonContainer: {
    alignSelf: "flex-end",
  },
  button: {
    right: 0,
    position: "absolute",
  },
});

export default JobOpenings;
