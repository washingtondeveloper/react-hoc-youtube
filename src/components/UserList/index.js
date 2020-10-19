import React from 'react'

import User from '../User';
import LoadingHOC from '../../hoc/LoadingHOC'

import './UserList.css';

function UserList({ users }) {
    return (
        <section className="users">
            {users.map(user => <User key={user.id} user={user}/>)}
        </section>
    );
}

export default LoadingHOC(UserList);