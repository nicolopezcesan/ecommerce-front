import React from 'react'

const UserTable = (props) => {

    const userList = () => {
        return (
            props.users.map(user => (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button
                            className="button muted-button"
                            onClick={() => { props.editRow(user) }}
                        >Edit</button>

                        <button
                            className="button muted-button"
                            onClick={() => { props.deleteUser(user.id) }}
                        >Delete</button>
                    </td>
                </tr>
            ))
        )
    }

    const noUsers = () => {
        return (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )
    }

    const render = () => {
        return (
            props.users.length > 0 ? userList() : noUsers()
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    render()
                }
            </tbody>
        </table>
    );
}

export default UserTable;