import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Text, Header, Button, Icon, Fab } from "native-base";
import ExamForm from "./ExamForm";
import ExamList from "./ExamsList";
class ExamScreen extends PureComponent {
  state={showModal:false}
 
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeading}>All Exams </Text>
        <ExamForm setVisibility={(e)=>this.setState({showModal:false})} visible={this.state.showModal} />
        <ExamList />
        <Fab
          onPress={()=>{this.setState({showModal:true}) }}
          // style={{ backgroundColor: COLORS.primary }}
          position="bottomRight"
          // onPress={onPress}
        >
          <Icon name="add" />
        </Fab>
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

export default ExamScreen;
