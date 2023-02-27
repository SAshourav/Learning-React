import React from 'react';
import './PostDetails.css'
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const posts = useLoaderData();
    const {title, body} = posts;
    return (
        <div className='postDetails'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;