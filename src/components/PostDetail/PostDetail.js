import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [id]);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setComments(data))
    }, [id]);

    return (
        <div>
            <h2>User id: {post.id}</h2>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments-{comments.length}</h2>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;