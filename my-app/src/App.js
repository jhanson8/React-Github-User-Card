import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//components
import UserList from './components/UserList';
import Personal from  './components/PersonalCard';

class App extends React.Component {



  render(){
  return (
    <div className="App">
    <h1>GitHub User List </h1>
    <Personal />
<UserList/>



    </div>
  );
}
}

export default App;
