import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import firebase,{userRef} from "../Firebase";
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
export default class LogIn extends Component {
  state = {
    isLoading: false,
    email: "admin@fr.com",
    password: "123456",
    errorMessage:''
  };
  onLoginClick = () => {
    if (
      this.state.email === "" &&
      this.state.password === ""
    ) {
      alert("Enter All fields!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          userRef.where('uid','==',res.user.uid).get().then(res=>{
            if(res.docs[0].data().type ==='employee'){
              this.setState({
                isLoading: false,
                fullname: "",
                email: "",
                password: "",
              });
              this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Employee' }]
            });
            }
            else {
              firebase.auth().signOut().then(res=>{
                this.setState({errorMessage:'Invalid Email or Password!',isLoading:false})
              });
            }
          }) .catch((error) => this.setState({ errorMessage: error.message, isLoading:false }));
          
           
         })
        .catch((error) => this.setState({ errorMessage: error.message, isLoading:false }));
    }
  };
  render() {
    return (
      //   <Container style={{ marginTop: "25%", padding: 20 }}>
      <Container>
        <Content>
          <Card style={{ padding: 20 }}>
            <Form>
              {/* <Text style={{ fontSize: 30, paddingVertical: 20 }}> Log In</Text> */}

              <Item stackedLabel>
                <Label>Email</Label>
                <Input   value={this.state.email}
                  onChangeText={(e) => this.setState({ email: e })}/>
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true}  value={this.state.password}
                  onChangeText={(e) => this.setState({ password: e })}/>
              </Item>

              <Button
                onPress={() => {
                  this.onLoginClick()
                }}
                style={{ justifyContent: "center", marginTop: 20 }}
              >
                {!this.state.isLoading && <Text>Log In</Text>}
                {this.state.isLoading && (
                  <ActivityIndicator size="small" color="white" />
                )}
              </Button>
            
              <Text style={{color:'red',alignSelf:'center'}}>{this.state.errorMessage}</Text>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}
