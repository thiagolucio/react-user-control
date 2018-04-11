import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './form.css'; 
import logo from '../images/login128.png';



export default class Form extends Component {
    
    render() {    
        return (
            <div>
                <Card className="container-login">
                    <img src={logo} className="Form-login-logo" alt="logo" />                   
                    <form>      
                        <CardTitle title="User Form" subtitle="User Form Register" />
                        <CardText className="body-CardText">
                            <TextField
                                className="textFields"    
                                hintText="Please, enter your first name"
                                errorText="This field is required"
                                floatingLabelText="Name"
                            />
                            <TextField
                                className="textFields"    
                                hintText="Please, enter your Surname"
                                errorText="This field is required"
                                floatingLabelText="Surname"
                            />

                            <TextField
                                className="textFields"    
                                hintText="Please, enter your Phone Number"
                                errorText="This field is required"
                                floatingLabelText="Phone Number"
                            />
                            
                            <TextField
                                className="textFields"    
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password"
                            />

                        </CardText>
                        <CardActions>
                            <RaisedButton label="Register" fullWidth={true} secondary={true} className="loginButton"/>
                        </CardActions>
                        </form>
                    </Card>                  
            </div>
        );         
    };
};