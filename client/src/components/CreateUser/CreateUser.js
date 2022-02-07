import React from 'react';
import classes from './CreateUser.module.css'
import {createUser} from '../../http/userApi'
import {useState} from 'react'


const CreateUser = (props) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [gender,setGender] = useState('')
    const [age,setAge] = useState('')

    const isGenderSelected = (value) => gender === value
    const handleGender = event => setGender(event.currentTarget.value)

    const validateForm = () => {
        return name.trim() && phone.trim() && gender && age.trim()
    }

    const Submit = async (event) =>{
        event.preventDefault()
        if (validateForm()){
            const newUser = {
                name,
                phone,
                gender: gender === 'Man' ? true: false,
                age
            }
            console.log(newUser)
            await createUser(newUser)
            props.changeStatus()
            setName('')
            setPhone('')
            setGender('')
            setAge('')
        }

    }

    return (
        <div className={classes.CreateUser}>
            <div className={classes.container}>
                <form className={classes.form}>
                    <div className={classes.Block}>
                        <label htmlFor="">Name</label>
                        <input value={name} onChange={event => setName(event.target.value)} className={classes.Name} type="text"/>
                    </div>
                    <div className={classes.Block}>
                        <label htmlFor="">Phone</label>
                        <input value={phone} onChange={event => setPhone(event.target.value)} className={classes.Phone} type="text"/>
                    </div>
                    <div className={classes.BlockGender}>
                        <label htmlFor="">Man</label>
                        <input onChange={handleGender} checked={isGenderSelected('Man')} value="Man" className={classes.Gender} id="M" name="Gender" type="radio"/>
                        <label  htmlFor="">Woman</label>
                        <input onChange={handleGender} checked={isGenderSelected('Woman')} value="Woman" className={classes.Gender} id="W" name="Gender" type="radio"/>
                    </div>
                    <div className={classes.Block}>
                        <label htmlFor="">Age</label>
                        <input value={age} onChange={event => setAge(event.target.value)} className={classes.Age} type="number"/>
                    </div>
                    <div className={classes.Block}>
                        <button className={classes.SubmitBtn} onClick={Submit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;