import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class FABExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (   
        <Fab
       
        containerStyle={{}}
        // style={{ backgroundColor: COLORS.primary }}
        position="bottomRight"
        // onPress={onPress}
    >
        <Icon name="add" />
    </Fab>
    
    );
  }
}
