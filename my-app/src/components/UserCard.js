/* jshint esversion: 6 */
import React from 'react';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme=>({
//     title: {
//       fontSize: 14,
//     },
//     flex: {
//       display: 'flex',
//       aliginItems: 'center',
//     },
//     chefAbout: {
//       display: 'flex',
//       aliginItems: 'center',
//
//
//     },
//     pos: {
//       marginBottom: 12,
//     },
//     media: {
//       height:150,
//       width: '50%',
//       marginLeft: '25%',
//       maxWidth: '100%',
//       maxHeight: 'auto',
//
//  },
//  root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 400,
//     height: 450,
//   },
//   icon: {
//      marginRight: theme.spacing(2),
//    },
//    header: {
//      backgroundColor:'white',
//      padding: '60px',
//      display:'flex',
//      justifyContent:'center',
//
//    },
//    buttons: {
//      marginTop: theme.spacing(2),
//    },
//    cardGrid: {
//      paddingTop: theme.spacing(8),
//      paddingBottom: theme.spacing(8),
//    },
//    card: {
//      height: '100%',
//      display: 'flex',
//      flexDirection: 'column',
//      boxShadow: '3px 3px 2px gray'
//    },
//    cardMedia: {
//      paddingTop: '56.25%', // 16:9
//    },
//    cardContent: {
//      flexGrow: 1,
//    },
//    avatar: {
//     width: theme.spacing(18),
//     height: theme.spacing(18),
//     marginLeft: '38%',
//    },
//    chefTitle: {
//      textDecoration: 'underline',
//      textDecorationColor: '#c62828'
//    },
//    cardBtns: {
//     backgroundColor: '#c62828',
//         '&:hover': {
//             backgroundColor: '#e53935'
//         },
//    },
//    btnCont: {
//     display: 'flex',
//     justifyContent: 'center'
//    }
// }));



function UserCard(props){

  // const classes = useStyles();

  return (
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



export default UserCard;
