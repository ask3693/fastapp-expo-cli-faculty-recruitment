import React from "react"; 
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import EmployeeLogIn from "./screens/EmployeeLogin";
import Employee from "./screens/employee/Employee";
const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
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
       <Stack.Navigator   initialRouteName="Employee">
        <Stack.Screen  name="Log In" component={LogIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Employee Login" component={EmployeeLogIn} />
        <Stack.Screen  name="Employee"  options={{ headerShown: false,   }} component={Employee} />
      </Stack.Navigator>
        </NavigationContainer>
    
    );
  }
}
