import React from "react"; 
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "./Firebase";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import EmployeeLogIn from "./screens/EmployeeLogin";
import Employee from "./screens/employee/Employee";
import Candidate from './screens/candidate/Candidate'
const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loggedIn:false,
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.setState({ loggedIn: true });
      } else {
          this.setState({ loggedIn: false });
      }
    });
  }
  onLogOut = ()=>{
    this.setState({loggedIn:false})
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer >
       <Stack.Navigator   initialRouteName={this.state.loggedIn?'Employee':'Log In'}>
        <Stack.Screen  name="Log In" component={LogIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Employee Login" component={EmployeeLogIn} />
        <Stack.Screen  name="Employee"  options={{ headerShown: false,   }} component={Employee} />
        <Stack.Screen  name="Candidate"  options={{ headerShown: false,   }} component={Candidate} />
      </Stack.Navigator>
        </NavigationContainer>
    
    );
  }
}
