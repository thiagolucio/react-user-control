
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

    constructor() {
        super();
        this.state = {
            login: "",
            password: "",
            msg: ""
        }
    }




    _sendLogin(event) {
        event.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ username: this.username.value, password: this.password.value }),
            headers: new Headers({
                'Content-type':'application/json'
            })
        };

        fetch('http://localhost:3004/login', requestInfo)
            .then(response => {
                if (response === "") {
                    return ({ msg: 'This field is required' });
                };
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('We have a problem with your Login')
            }
            })
            .then(token => {
                console.log(token);
            })
            .catch(error => {
            this.setState({msg:error.message})
        })
 };


    render() {
        return (                
                <Card className="container-login">
                    <img src={logo} alt="logo login" />
                    <form method="POST" onSubmit={(event) => this._sendLogin(event)}>
                        <CardTitle title="LOGIN" subtitle="Please Enter your account to login" />
                        <CardText className="body-CardText">
                        <TextField                            
                            id="username"
                            fullWidth={true}    
                            className="textFields"
                            hintText="your username ?"
                            errorText={this.state.msg}
                            floatingLabelText="Username"
                            type="text"                            
                            ref={(input) => this.username = input}
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
                            ref={(input) => this.password = input}
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