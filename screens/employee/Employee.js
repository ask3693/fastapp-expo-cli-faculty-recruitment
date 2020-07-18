import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import JobOpenings from './screens/JobOpenings/JobOpenings'
import Exams from './screens/Exams/ExamScreen'
import LogOut from '../LogOut'

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {/* {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )} */}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
      <Tab.Navigator
          screenOptions={({route})=>{
          }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Candidates') {
              return (
                <HomeIconWithBadge
                  name={
                    focused
                      ? 'ios-people'
                      : 'ios-people'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Exams') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list-box'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Job Openings') {
              return (
                <Ionicons
                  name={focused ? 'ios-briefcase' : 'ios-briefcase'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Log Out') {
              return (
                <Ionicons
                  name={'ios-log-out'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3f51b5',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Job Openings" component={JobOpenings} />
        <Tab.Screen name="Exams" component={Exams} />
        <Tab.Screen name="Candidates" component={SettingsScreen} />
        <Tab.Screen name="Log Out"  component={LogOut} listeners={{tabPress:()=>{alert('log out')}}}  />
      </Tab.Navigator>
   
  );
}