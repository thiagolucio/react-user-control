
import React, { Component } from 'react';
import './login.css';
import logo from '../images/Touch_ID-128.png';
import FontIcon from 'material-ui/FontIcon';
import {
    Card,
    CardActions,
    CardTitle,
    CardText,
    FlatButton,
    TextField,
    RaisedButton
} from 'material-ui';



export default class Login extends Component {


    state = {
        email: "",
        password: ""
    }


    componentDidMount() {
        fetch('http://localhost:3004/user');
        
    }


    _sendLogin(event) {
        event.preventDefault();
        console.log('Login data is sent');
        var _data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
        };
        console.log(_data);
        this.setState({
            email: "",
            password: ""
        });
};


    render() {
        return (                
                <Card className="container-login">
                    <img src={logo} alt="logo login" />
                    <form method="POST" onSubmit={(event) => this._sendLogin(event)}>
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
                        


                        <FlatButton
                            label="Register"                            
                            href="/Form"
                            target="_self"
                            primary={true}
                            className="button-not-register"
                            labelStyle={{ textTransform: 'capitalize' }}
                            icon={<FontIcon className="material-icons">person_add</FontIcon>}
                        />
                        

                        </CardText>
                        <CardActions>
                            <RaisedButton type="submit" label="ENTER" fullWidth={true} primary={true} className="loginButton" labelStyle={{ fontSize: '18px' }}/>
                        </CardActions>
                    </form>
                </Card>
                
        );
    };
};