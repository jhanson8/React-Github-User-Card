/* jshint esversion: 6 */
import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import UserCard from './UserCard.js';



class UserList extends React.Component{

  constructor() {
     super();
     this.state = {
       users: []
     };
     console.log("Constructor is running");
   }

//CDA
  componentDidMount(){
    axios
    .get('https://api.github.com/users/jhanson8/followers')
    .then(response => {
      this.setState({
         users: response.data
       });

      console.log(response);


    });
  }


  render(){
    return(
        <div>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                {this.state.users.map(users => {
                    return <UserCard users={users} key={users.login}/>
                })}
            </Grid>
        </div>
    );




}
};



export default UserList;
