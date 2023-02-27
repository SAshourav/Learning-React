import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({friend}) => {
    const {id,name,email,username} = friend;
    return (
        <div className='container'>
            <h2>Name : {name}</h2>
            <h4>E-mail : {email} </h4>
            <p><small>UserName : <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;