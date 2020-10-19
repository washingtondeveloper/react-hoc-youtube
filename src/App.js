import React, { useEffect } from 'react';

import UserList from './components/UserList';

import './App.css';

function App() {

  const [users, setUsers] = React.useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
    }, 1000);
  }, []);

  return (
    <>
      <UserList users={users}/>
    </>
  );
}

export default App;
