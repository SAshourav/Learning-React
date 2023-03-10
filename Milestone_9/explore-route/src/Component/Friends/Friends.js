import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h2>This is the friend Page</h2>
            <h1>Number of Friends : {friends.length}</h1>
            {
                friends.map(friend => <Friend key={friend.id} friend= {friend}></Friend>)
            }
        </div>
    );
};

export default Friends;