import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Text, Header, Button, Icon, Fab } from "native-base";
import JobForm from "./JobForm";
import JobPosts from "./JobPosts";
class JobOpenings extends PureComponent {
  state={showModal:false}
 
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeading}>All Job Openings </Text>
        <JobForm setVisibility={(e)=>this.setState({showModal:false})} visible={this.state.showModal} />
        <JobPosts />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 40,
    marginTop: "10%",
  },
  mainContainer: {
    flex: 1,
    width: "100%",

    alignItems: "center",
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
