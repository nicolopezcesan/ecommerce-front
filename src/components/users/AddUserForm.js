import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        // console.log(data);
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

                <label>Surname</label>
                <input type="text" name="surname" ref={register({ required: { value: true, message: 'Debe ingresar un surname' } })} />
                <div>
                    {errors?.surname?.message}
                </div>

                <label>Email</label>
                <input type="text" name="email" ref={register({ required: { value: true, message: 'Debe ingresar un email' } })} />
                <div>
                    {errors?.email?.message}
                </div>

                <label>Password</label>
                <input type="text" name="password" ref={register({ required: { value: true, message: 'Debe ingresar un password' } })} />
                <div>
                    {errors?.password?.message}
                </div>

                <label>Role</label>
                <select name="role" ref={register({ required: { value: true, message: 'Debe seleccionar un role' } })} >
                    <option value="ADMIN">Admin</option>
                    <option value="STUDENT">Student</option>
                    <option value="TEACHER">Teacher</option>
                </select>
                <div>
                    {errors?.role?.message}
                </div>

                <button>Add new user</button>
            </form>
        </div>
    )
}

export default AddUserForm;