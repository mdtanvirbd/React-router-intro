import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post =useLoaderData()
    const {id,title,body}=post
    const {postId} = useParams();

    const navigate = useNavigate();
    console.log(postId);

     const handleGoBack = () =>{
        navigate(-1)

    }
    return (
        <div>
            <h3>Post details about: {id}</h3>        
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;