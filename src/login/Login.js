import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './login.css';
import logo from '../images/Touch_ID-128.png';
// import { Link } from 'react-router-dom';


export default class Login extends Component {

    _sendForm(event) {
        event.preventDefault();
        console.log('Form is sent');
        var _data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
        };
        console.log(_data) ;
};


    render() {
        return (
            <div>               
                <Card className="container-login">
                    <img src={logo} alt="logo login" />
                    <form method="POST" onSubmit={(event) => this._sendForm(event)}>
                        <CardTitle title="LOGIN" subtitle="Please Enter your account to login" />
                        <CardText className="body-CardText">
                            <TextField
                                id="email"    
                                fullWidth={true}    
                                className="textFields"
                                hintText="your email ?"
                                errorText="This field is required"
                                floatingLabelText="Email"
                                type="email"
                            />
                            <br/>
                            <TextField
                                id="password"    
                                fullWidth={true}    
                                className="textFields"
                                hintText="Your Password ?"
                                errorText="This field is required"
                                floatingLabelText="Password"
                                type="password"
                            />
                            <p>
                                <RaisedButton label="Create Account" secondary={true} className="button-not-register" labelStyle={{ fontSize: '12px' }}/>                                
                            </p>
                        </CardText>
                        <CardActions>
                            <RaisedButton type="submit" label="ENTER" fullWidth={true} primary={true} className="loginButton" labelStyle={{ fontSize: '18px' }}/>
                        </CardActions>
                    </form>
                </Card>                  
            </div>
        );
    };
};