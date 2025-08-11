import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const{ id, title, body}=post;
    const userStyle ={
        border:"2px solid yellow",
        padding:"5px",
        borderRadius: "20px"
    }
    return (
        <div style={userStyle}>
            <p>Id:{id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            
        </div>
    );
};

export default Post;