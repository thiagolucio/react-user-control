import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './login.css';
import logo from '../images/Touch_ID-128.png';
// import logo from '../images/login128-1.png';


export default class Login extends Component {

    render() {
        return (
            <div>               
                <Card className="container-login">
                    <img src={logo} alt="logo login" />
                    <form>
                        <CardTitle title="LOGIN" subtitle="Please Enter your account to login" />
                        <CardText className="body-CardText">
                            <TextField
                                fullWidth={true}    
                                className="textFields"
                                hintText="your email ?"
                                errorText="This field is required"
                                floatingLabelText="Email"
                            />
                            <br/>
                            <TextField
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
                            <RaisedButton label="ENTER" fullWidth={true} primary={true} className="loginButton" labelStyle={{ fontSize: '18px' }}/>
                        </CardActions>
                    </form>
                </Card>                  
            </div>
        );
    };
};