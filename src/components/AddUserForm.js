import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);
        e.target.reset(); // limpiar campos
    }

    return (
        <div>
            <h2>Add User</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input type="text" name="name" ref={register({ required: { value: true, message: 'Debe ingresar un nombre' } })} />
                <div>
                    {errors?.name?.message}
                </div>

                <label>Username</label>
                <input type="text" name="username" ref={register({ required: { value: true, message: 'Debe ingresar un username' } })} />
                <div>
                    {errors?.username?.message}
                </div>

                <button>Add new user</button>
            </form>
        </div>
    )
}

export default AddUserForm;