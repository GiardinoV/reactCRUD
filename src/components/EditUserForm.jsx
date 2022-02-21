import React from "react";
import {useForm} from 'react-hook-form';

const EditUserForm = (props) => {

    //console.log(props.currentUser);
    const {register, handleSubmit, setValue, formState: { errors }} = useForm({
        defaultValues: props.currentUser
    });

    setValue("name", props.currentUser.name)
    setValue('username', props.currentUser.username)
    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        //limpiar campos
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" placeholder="name" {
            ...register("name", {required: true, maxLength: 30 })}
        />
        {errors.name && errors.name.type === "required" && <span>Campo requerido</span>}
        
        <label>Username</label>
        <input type="text" name="username" placeholder="username" {
            ...register("username", {required: true, maxLength: 30 })}
        />
        {errors.username && errors.username.type === "required" && <span>Campo requerido</span>}
        <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;