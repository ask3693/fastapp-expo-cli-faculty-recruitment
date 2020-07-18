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
import Exam from './Exam';
import { View, StyleSheet } from "react-native";
function ExamList() {
  return (
    <Card style={styles.mainContainer}>
        {/* <Text>All </Text> */}
        <Exam/>
        <Exam/>
        
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

export default ExamList;
