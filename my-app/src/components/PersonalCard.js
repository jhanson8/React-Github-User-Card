/* jshint esversion: 6 */
import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import UserCard from './UserCard.js';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class Personal extends React.Component{

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
    .get('https://api.github.com/users/jhanson8/')
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
      <Grid item>
        <Card >
         <CardMedia
            image={props.users.avatar_url}
            title="Profile Picture"
          />
          <CardContent>
            <Typography>
            GitHub User Card
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Username: {props.users.login}
            </Typography>
            <Typography >
              Followers:  {props.users.followers}
            </Typography>
            <Typography>

            </Typography>
          </CardContent>
          </Card>
      </Grid>
      </div>
    );




}
};



export default Personal;
