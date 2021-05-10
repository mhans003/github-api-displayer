import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'testuser1',
                avatar_url: 'https://avatars.githubusercontent.com/u/17229444?v=4',
                html_url: 'https://www.github.com/mhans003'
            },
            {
                id: '2',
                login: 'testuser2',
                avatar_url: 'https://avatars.githubusercontent.com/u/17229444?v=4',
                html_url: 'https://www.github.com/mhans003'
            },
            {
                id: '3',
                login: 'testuser3',
                avatar_url: 'https://avatars.githubusercontent.com/u/17229444?v=4',
                html_url: 'https://www.github.com/mhans003'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem 
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    girdGap: '1rem'
}

export default Users
