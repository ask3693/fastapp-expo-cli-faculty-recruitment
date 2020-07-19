import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, ActivityIndicator } from "react-native";
import {
  Card,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  H1,
} from "native-base";
import { jobsRef } from "../../../../Firebase";

const JobForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    if(title==="" && description===""){
      alert('Fill all the fields!');
      return;
    }
    setLoading(true);
    jobsRef
      .add({
        title: title,
        description: description,
      })
      .then(() => {
        setLoading(false);
        props.setVisibility(false);
      })
      .catch((err) => setLoading(false));
  };
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={() => {
        props.setVisibility(false);
      }}
      presentationStyle="fullScreen"
    >
      <Container>
        <Content>
          <Card style={{ padding: 20 }}>
            <Form>
              <H1 style={{ alignSelf: "center" }}> Add a Job</H1>
              <Item stackedLabel>
                <Label>Title</Label>
                <Input value={title} onChangeText={(e) => setTitle(e)} />
              </Item>
              <Item stackedLabel>
                <Label>Description</Label>
                <Input
                  value={description}
                  onChangeText={(e) => setDescription(e)}
                />
              </Item>
              <Button
                onPress={() => {
                  onSubmit();
                }}
                style={{ justifyContent: "center", marginTop: 20 }}
              >
                {!loading && <Text style={{ color: "white" }}> Add</Text>}
                {loading && <ActivityIndicator size="small" color="white" />}
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
