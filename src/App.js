import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const usersData = [];
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  // state
  const [users, setUsers] = useState(usersData);

  // add users
  const addUser = (user) => {
    user.id = uuidv4();

    setUsers([
      ...users,
      user
    ]);
  }

  // delete user
  const deleteUser = (id) => {
    let arrayFiltered = users.filter(user => user.id !== id);
    setUsers(arrayFiltered);
  }

  // edit user
  const [editing, setEditing] = useState(false);

  // current user
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    });
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  }

  const goToBack = () => {
    setEditing(false);
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>

      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
                goToBack={goToBack}
              />
            ) : (
                <AddUserForm addUser={addUser}></AddUserForm>
              )
          }
        </div>

        {/* VIEW USERS */}
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
