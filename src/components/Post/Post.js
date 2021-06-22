import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments = id =>{
        const url = `post/${id}/`
        history.push(url)
    }
    return (
        <div>
            <p><strong>{id}</strong></p>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show Comment</button>
        </div>
    );
};

export default Post;