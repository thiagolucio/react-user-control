import React, {Component} from 'react';
import './UsersList.css';
import AppBar from 'material-ui/AppBar';
import {List, ListItem, Subheader, Card, FlatButton} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import logo from '../images/user-id-48.png'

const iconStyles = {
    fontSize: '32px',
};

const colorDialogStyles = {
    background: '#333333',
};

export default class UsersList extends Component {
    state = {
        open: false,
    };

    render() {
        
        return (
            <div>
                <AppBar
                    title="Control User App"
                    iconElementRight={<FlatButton label="Logout"/>}
                />
                <Card className="container-list">
                    <List>
                        <Subheader><h2>Users Saves List</h2></Subheader>
                        <ListItem
                            primaryText="Brendan Lim"
                            leftAvatar={<Avatar src={logo}/>}
                            rightIcon={<FontIcon className="material-icons" style={iconStyles}>open_in_browser</FontIcon>}
                            onClick={() => this.setState({ open: true })}
                        />
                    </List>                    
                </Card>

                {/* Dialog */}
                <FullscreenDialog
                    open={this.state.open}
                    appBarStyle={{ background: '#880E4F'}}
                    onRequestClose={() => this.setState({ open: false })}
                    title={'Demo dialog'}
                    style={colorDialogStyles}
                    actionButton={<FlatButton
                        label='Closed'
                        onClick={() => this.setState({ open: false })}
                    />}
                >
                    {/* Content inside here */}
                </FullscreenDialog>
            </div>
        );
    }
}
