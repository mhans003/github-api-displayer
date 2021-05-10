import React, { Component } from 'react'

class UserItem extends Component {
    constructor() {
        //Need to call super() in order to use 'this'
        super();
        this.state = {
            id: 'id',
            login: 'lksjdlfkj',
            avatar_url: '',
            html_url: 'https://www.github.com/mhans003'
        }
    }
    render() {
        const { login, avatar_url, html_url } = this.state;
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" style={{ width: '60px' }}/> 
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">Placeholder Profile Link</a>
                </div>
            </div>
        )
    }
}

export default UserItem
