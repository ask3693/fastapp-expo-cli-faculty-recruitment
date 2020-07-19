import React, { useEffect, useState,un, Component } from "react";
import { Card } from "native-base";
import { jobsRef } from "../../../../Firebase";
import JobPost from "./JobPost";
import { View, StyleSheet } from "react-native";
class  JobPosts extends Component {
  state = {jobs:[],intervalId: null}

componentWillMount(){
  jobsRef.get().then((res) => {
    this.setState({jobs:res.docs});
  });
  let intervalId = setInterval(()=>{
    jobsRef.get().then((res) => {
      this.setState({jobs:res.docs});
    });
  }, 5000);
  this.setState({ intervalId: intervalId });
}
componentWillUnmount(){
  clearInterval(this.state.intervalId);
}
onDeleteClick= id=>{
  jobsRef.doc(id).delete().then(()=>{})
}
   render(){
    console.disableYellowBox = true;
    return (
      <Card style={styles.mainContainer}>
        {this.state.jobs.map((r) => {
          return <JobPost onDeleteClick={e=>this.onDeleteClick(e)} job={r} />;
        })}
      </Card>
    );
   }
  
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 10,
    paddingLeft: 30,
  },
});

export default JobPosts;
