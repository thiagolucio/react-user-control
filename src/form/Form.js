import React, { Component } from 'react';
import './form.css';
// import Subheader from 'material-ui/Subheader';
import {
    Card,
    CardActions,
    CardTitle,
    CardText,
    TextField,
    RaisedButton,
    MenuItem,
    SelectField } from 'material-ui';



export default class Form extends Component {

    state = {
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: "",
        postCode: "",
        country: "",
        comment: "",
    }

    _sendRegister(event) {
        event.preventDefault();
        console.log('Form is sent');
        var _data = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            postCode: document.getElementById('postCode').value,
            country: document.getElementById('country').value,
            comment: document.getElementById('comment').value
        };
        console.log(_data);
        this.setState({
            name: "",
            surname: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            city: "",
            postCode: "",
            country: "1",
            comment: "",
        })
    };

//    Canadian Postal Code 
//    function checkPostal(postal) {
//     var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
// OU var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
//     if (regex.test(postal.value))
//         return true;
//     else return false;
// }

    render() {
        return (
            <div>
                <Card className="container-form">

                    <form method="POST" onSubmit={(event) => this._sendRegister(event)}>
                        <CardTitle title="User Form" subtitle="User Form Register" />
                        <CardText className="body-CardText">
                            <TextField
                                id="name"
                                className="textFields"
                                hintText="Please, enter your first name"
                                errorText="This field is required"
                                floatingLabelText="Name"
                            />
                            <TextField
                                id="surname"
                                className="textFields"
                                hintText="Please, enter your Surname"
                                errorText="This field is required"
                                floatingLabelText="Surname"
                            />

                            <TextField
                                id="email"
                                className="textFields"
                                hintText="Please, enter your Email"
                                errorText="This field is required"
                                floatingLabelText="Email"
                            />

                            <TextField
                                id="phone"
                                className="textFields"
                                hintText="Please, enter your Phone Number"
                                errorText="This field is required"
                                floatingLabelText="Phone Number"
                            />

                            <TextField
                                id="password"
                                className="textFields"
                                hintText="Please, enter your Password"
                                floatingLabelText="Password"
                                type="password"
                            />

                            <TextField
                                id="address"
                                className="textFields"
                                hintText="Please, enter your Address"
                                floatingLabelText="Your Address"
                                type="text"
                            />

                            <TextField
                                id="city"
                                className="textFields"
                                hintText="Please, enter your City"
                                floatingLabelText="Your City"
                                type="text"
                            />

                            <TextField
                                id="postCode"
                                className="textFields"
                                hintText="Please, enter your Postcode"
                                floatingLabelText="Your Postcode"
                                type="text"
                            />
                            <SelectField
                              id="country"
                              floatingLabelText="Select your Country"
                              value={this.state.value}
                              onChange={this.handleChange}
                            >
                              <MenuItem value={1} primaryText="America" />
                              <MenuItem value={2} primaryText="Brazil" />
                              <MenuItem value={3} primaryText="Russia" />
                              <MenuItem value={4} primaryText="German" />
                              <MenuItem value={5} primaryText="Poland" />
                            </SelectField>

                            <TextField
                                id="comment"
                                className="textFields"
                                hintText="Your have some Comment?"
                                floatingLabelText="Your Comment"
                                type="text"
                            />

                        </CardText>
                        <CardActions>
                            <RaisedButton type="submit" label="Register" fullWidth={true} primary={true} className="loginButton" labelStyle={{ fontSize: '18px' }}/>
                        </CardActions>
                        </form>
                    </Card>
            </div>
        );
    };
};
