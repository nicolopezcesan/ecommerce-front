import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import USER_URL from 'constants/index';
import { HttpService } from 'services/http-service';

import Loader from 'react-loader-spinner';
import { useToasts } from 'react-toast-notifications'


const Users = () => {
    const { addToast } = useToasts();

    const [users, setUsers] = useState();

    useEffect(() => {
        getUsers()
    }, [])


    const getUsers = async () => {
        HttpService.get(USER_URL.ALL)
            .then(data => setUsers(data.users))
            .catch(error => console.error('There was an error!', error));
    }

    const addUser = async (user) => {
        HttpService.post(USER_URL.REGISTER, user)
            .then((data) => {
                addToast('El usuario se registró con éxito', { appearance: 'success', autoDismiss: true })
                getUsers();
            })
            .catch(error => console.error('There was an error!', error));
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
        id: null,
        name: '',
        surname: '',
        email: '',
        role: '',
        image: null,
        password: '',
        __v: null
    });

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user._id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            role: user.role,
            image: user.image,
            password: user.password,
            __v: user.__v
        });
    }

    const updateUser = (id, updateUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updateUser : user)));
    }

    const goToBack = () => {
        setEditing(false);
    }

    ////// FORMS

    const editForm = () => {
        return (
            <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
                goToBack={goToBack}
            />
        )
    }

    const addForm = () => {
        return (
            <AddUserForm addUser={addUser} />
        )
    }

    const userTable = () => {
        return (
            <UserTable
                users={users}
                deleteUser={deleteUser}
                editRow={editRow}
            />
        )
    }

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>

            <div className="flex-row">
                <div className="flex-large">
                    {
                        editing ? editForm() : addForm()
                    }
                </div>

                <div className="flex-large">
                    <h2>View Users</h2>
                    {
                        (users) ? userTable() : <Loader type="TailSpin" color="#0366ee" height={80} width={80} />
                    }
                </div>
            </div>
        </div >
    );
}

export default Users;
