import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const{ id, title, body}=post;
    const userStyle ={
        border:"2px solid yellow",
        padding:"5px",
        borderRadius: "20px"
    }
    const navigate = useNavigate();
    const handleShowDetails = ()=>{
        navigate(`/post/${id}`);

    }
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div style={userStyle}>
            <p>Id:{id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link><br />
            <button onClick={handleShowDetails}>Click to see details</button>
            <br />
            <button onClick={handleGoBack}>Go back</button>
            
        </div>
    );
};

export default Post;