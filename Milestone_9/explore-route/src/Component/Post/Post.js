import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title, body} = post;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`post/${id}`);
    }
    return (
        <div className='container'>
            <h3>Post Title : {title} </h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show details 2</button>
        </div>
    );
};

export default Post;