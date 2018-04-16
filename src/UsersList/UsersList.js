import React, { Component } from 'react';
import './UsersList.css';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import logo from '../images/user-id-48.png';
import barLogo from '../images/user-id-128.png';
import {
    List,
    ListItem,
    Subheader,
    Card,
    FlatButton,
    Toolbar,
    ToolbarGroup,
    ToolbarTitle,
    RaisedButton,
    Paper
} from 'material-ui';

const iconStyles = {
    fontSize: '32px',
};

const colorDialogStyles = {
    background: '#333333',
};

export default class UsersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            open: false,
            selectedUser: {}
        };

        this.openDetails = this.openDetails.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3004/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ users });
            });
    }

    // componentDidMount() {
    //     const db = require('../db.json');

    //     this.setState({ users: db.users });
    // }

    openDetails = (user) => {
        this.setState({ open: true, selectedUser: user });
    }

    render() {
        const { users, selectedUser } = this.state;

        return (
            <div>
                <Paper zDepth={2}>
                    <Toolbar style={{ background: '#E0E0E0' }}>
                        <ToolbarGroup firstChild={true}>
                            <img src={barLogo} alt="logo login" className="barLogo" />
                            <ToolbarTitle text="User List Control" />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <RaisedButton label="Logout" primary={true} />
                        </ToolbarGroup>
                    </Toolbar>
                </Paper>

                <Card className="container-list">

                    <List>
                        <Subheader><h2>Users Saves List</h2></Subheader>
                        {
                            users.map(user => {
                                return (
                                    <ListItem key={user.id}
                                        primaryText={user.name}
                                        leftAvatar={<Avatar src={logo} />}
                                        rightIcon={<FontIcon className="material-icons" style={iconStyles}>open_in_browser</FontIcon>}
                                        onClick={() => this.openDetails(user)}
                                    />
                                );
                            })
                        }
                    </List>
                </Card>

                {/* Dialog */}
                <FullscreenDialog
                    open={this.state.open}
                    appBarStyle={{ background: '#880E4F' }}
                    onRequestClose={() => this.setState({ open: false })}
                    title={'User Details'}
                    style={colorDialogStyles}
                    actionButton={<FlatButton label='Close' onClick={() => this.setState({ open: false })} />}
                >
                    {/* Content inside here */}
                    {JSON.stringify(selectedUser)}
                </FullscreenDialog>
            </div>
        );
    }
}