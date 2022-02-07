import React from 'react';
import classes from './Table.module.css'
import {getUsers} from '../../http/userApi'
import User from '../User/User'
import {useEffect,useState} from 'react'

const Table = (props) => {

    const [users,setUsers] = useState([])
    const allUsers = async ()=>{
        const response = await getUsers()
        setUsers(response)
    }

    useEffect(()=>{
       allUsers()
    },[props.status])
    return (
        <div className={classes.container}>
            <h1>Users table</h1>
            <table className={classes.tab}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=><User user={user}/>)}
                </tbody>
            </table>
        </div>
    )
};

export default Table;