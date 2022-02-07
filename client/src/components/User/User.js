import React from 'react';
import classes from './User.module.css'

const User = (props) => {
    const gender = () => {
       return props.user.gender ? "Man" : "Woman"
    }
    return (
        <tr>
            <td aria-label="Name">{props.user.name}</td>
            <td aria-label="Phone">{props.user.phone}</td>
            <td aria-label="Gender">{gender()}</td>
            <td aria-label="Age">{props.user.age}</td>
        </tr>
    );
};

export default User;