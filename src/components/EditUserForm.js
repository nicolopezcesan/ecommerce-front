import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    console.log(props);

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data);
        e.target.reset();
    }

    return (
        <div>
            <h2>Edit User</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    ref={register({ required: { value: true, message: 'Debe ingresar un nombre' } })}
                />
                <div>{errors?.name?.message}</div>

                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    ref={register({ required: { value: true, message: 'Debe ingresar un username' } })}
                />
                <div>{errors?.username?.message}</div>

                <button type="submit">Edit user</button>
                <button type="button" onClick={() => props.goToBack()} className="button muted-button">Cancel</button>
            </form>
        </div>
    );
}

export default EditUserForm;