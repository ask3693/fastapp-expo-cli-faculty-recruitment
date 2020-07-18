import React, { Component } from 'react';
import { ActivityIndicator} from 'react-native'
import { Card,Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
export default class SignUp extends Component {
  state={isLoading:false}
  render() {
    return (
      <Container>
       
        <Content>
            <Card style={{margin:10,padding:20}}>
          <Form>
              
                  {/* <Text style={{fontSize:30,paddingVertical:20}} > Log In</Text> */}
             
            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            
                <Button onPress={()=>{this.setState({isLoading:true})}} style={{justifyContent:'center',marginVertical:20}}>
                {!this.state.isLoading &&<Text>Sign Up</Text>}
                {this.state.isLoading &&  <ActivityIndicator size="small" color="white"  />}
                </Button>
          
          </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}