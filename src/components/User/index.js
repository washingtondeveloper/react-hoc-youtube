import React from 'react'

import './User.css';

export default function User({ user }) {
    return (
        <div className="user">
            <img className="user-image" alt="Avatar" src={user.avatar_url}/>
            <div className="user-description">
                <h2 className="user-login">{user.login}</h2>
                <a href={user.html_url} target={user.login}>Git</a>
            </div>
        </div>
    ); 
}