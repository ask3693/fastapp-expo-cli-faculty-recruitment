import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import {
  Card,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  H1,
} from "native-base";

const JobForm = (props) => {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={() => {
        props.setVisibility(false)
      }}
      presentationStyle="fullScreen"
    >
      <Container>
        <Content>
          <Card style={{ padding: 20 }}>
            <Form>
            <H1 style={{alignSelf:'center'}}> Add an Exam</H1>

            <Item stackedLabel>
                <Label>Title</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Description</Label>
                <Input />
              </Item>
              

              <Button
                onPress={() => {
                  this.setState({ isLoading: true });
                }}
                style={{ justifyContent: "center", marginTop: 20 }}
              >
                 <Text style={{color:'white'}}> Add</Text>
              </Button>

              <Button
                onPress={() => props.setVisibility(false)}
                transparent
                style={{ justifyContent: "center", marginTop: 5 }}
              >
                <Text>Cancel</Text>
              </Button>
             
            </Form>
          </Card>
        </Content>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "white",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default JobForm;
