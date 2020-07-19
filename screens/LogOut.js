import React,{useEffect} from 'react'
import { View} from 'native-base'
import firebase from "../Firebase";
import { ActivityIndicator,Text } from "react-native";
import {NavigationActions, StackActions} from 'react-navigation';
function LogOut(props) {
    useEffect(()=>{
        firebase.auth().signOut().then(res=>{
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Log In' }]
           });

        });
    },[])
    return (
        <View style={{flex:1, alignContent:'center',justifyContent:'center',backgroundColor:'white'}}>
           <ActivityIndicator size="large" color="#3f51b5" />
        </View>
    )
}

export default LogOut
