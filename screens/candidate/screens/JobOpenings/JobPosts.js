import React from "react";
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
import JobPost from './JobPost';
import { View, StyleSheet } from "react-native";
function JobPosts() {
  return (
    <Card style={styles.mainContainer}>
        {/* <Text>All </Text> */}
        <JobPost/>
        <JobPost/>
        <JobPost/>
        <JobPost/>
        <JobPost/>
    </Card>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flex: 1,
    width: "100%",
    height:'100%',
    padding:10,
    paddingLeft:30
  },
});

export default JobPosts;
