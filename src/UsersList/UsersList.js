import React, {Component} from 'react';
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
    state = {
        open: false,
    };

    render() {
        
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
                    title={'User Details'}
                    style={colorDialogStyles}
                    actionButton={<FlatButton
                    label='Close'
                    onClick={() => this.setState({ open: false })}
                    />}
                >
                    {/* Content inside here */}
                </FullscreenDialog>
            </div>
        );
    }
}