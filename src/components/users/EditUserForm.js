import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    console.log(props);

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('surname', props.currentUser.surname);
    setValue('email', props.currentUser.email);
    setValue('role', props.currentUser.role);

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

                <label>Role</label>
                <select name="role" ref={register({ required: { value: true, message: 'Debe seleccionar un role' } })} >
                    <option value="ADMIN">Admin</option>
                    <option value="STUDENT">Student</option>
                    <option value="TEACHER">Teacher</option>
                </select>
                <div>
                    {errors?.role?.message}
                </div>

                <button type="submit">Save</button>
                <button type="button" onClick={() => props.goToBack()} className="button muted-button">Cancel</button>
            </form>
        </div>
    );
}

export default EditUserForm;