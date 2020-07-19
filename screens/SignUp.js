import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import firebase, { userRef } from "../Firebase";
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
  Text,
} from "native-base";
export default class SignUp extends Component {
  state = {
    isLoading: false,
    fullname: "Muhammad Adeel",
    email: "aliadeel20@gmail.com",
    password: "adeel123",
    errorMessage: "",
  };
  onSignUpClick = () => {
    if (
      this.state.email === "" &&
      this.state.fullname === "" &&
      this.state.password === ""
    ) {
      alert("Enter All fields!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          userRef
            .add({
              uid: res.user.uid,
              fullname: this.state.fullname,
              type: "candidate",
            })
            .then((res) => {
              this.setState({
                isLoading: false,
                fullname: "",
                email: "",
                password: "",
              });
              this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Candidate' }]
            });
            });
        })
        .catch((error) =>
          this.setState({ errorMessage: error.message, isLoading: false })
        );
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ margin: 10, padding: 20 }}>
            <Form>
              <Item stackedLabel>
                <Label>Full Name</Label>
                <Input
                  value={this.state.fullname}
                  onChangeText={(e) => this.setState({ fullname: e })}
                />
              </Item>
              <Item stackedLabel>
                <Label>Email</Label>
                <Input
                  value={this.state.email}
                  onChangeText={(e) => this.setState({ email: e })}
                />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(e) => this.setState({ password: e })}
                />
              </Item>

              <Button
                onPress={() => {
                  this.onSignUpClick();
                }}
                style={{ justifyContent: "center", marginVertical: 20 }}
              >
                {!this.state.isLoading && <Text>Sign Up</Text>}
                {this.state.isLoading && (
                  <ActivityIndicator size="small" color="white" />
                )}
              </Button>
              <Text style={{ color: "red", alignSelf: "center" }}>
                {this.state.errorMessage}
              </Text>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}
