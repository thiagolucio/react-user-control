import React, { Component } from 'react';
import './list.css';

import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'

export default class List extends Component {
    render() {    
        return (
            <div>
                <AppBar
                title="Control User App"          
                iconElementRight={<FlatButton label="Logout" />} 
                />
                
                <Card className="container-login">                                     
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