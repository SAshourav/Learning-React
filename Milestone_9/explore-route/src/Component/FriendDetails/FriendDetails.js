import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Details About {friend.name}</h1>
            <p>Phone Number: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;