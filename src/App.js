import React, { useState,useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/loginAction';
import { Button, InputGroup, FormControl } from 'react-bootstrap'; 
import { navigate } from "hookrouter";
import {notification } from 'antd';
function App(props) {
  const openNotificationWithIcon = type => {
    switch(type) {
      case 'success':
        notification[type]({
          message: 'Success',
          description: 'Loggged in successfully'
        });
      break;
      case 'error':
        notification[type]({
          message: 'Error',
          description: 'Invalid credentials'
        });
      break;
      case 'warning':
        notification[type]({
          message: 'Warning',
          description: 'Please enter the credentials'
        });
      break;
      default:
        case 'success':
        notification[type]({
          message: '',
          description: ''
        });
      break;
    }
  };
   useEffect(()=>{props.simpleAction();},[])
   const [username,setUserName] = useState('');
   const [password,setPassword] = useState('');
   function submitHandle(){
     if(username === props.loginReducer.username && password === props.loginReducer.password){
      openNotificationWithIcon('success');
      navigate('/DashBoard');
     }
     else if(!username || !password){
      openNotificationWithIcon('warning');
     }
     else{
      openNotificationWithIcon('error');
     }
   }
  return (
    <div className="App">
      <div className="container">
        <div className="login">
          <span className="heading">
            Login
          </span>
        <div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      // placeholder="Username"
      required
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={username}
      type="email"
      onChange={e => setUserName(e.target.value)}
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      // placeholder="Username"
      required
      aria-label="Password"
      aria-describedby="basic-addon2"
      type="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
  </InputGroup>
  </div>
  <Button onClick={submitHandle}>Login</Button>
  </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
 })
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
