import React from 'react';

const Comments = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div style={{boxShadow:'inset 1px 1px 50px gray', padding:'10px', margin:'40px', display: 'flex'}}>
            <p style={{fontSize:'14px', border:'1px solid gray', padding:'10px'}}>commented by- <strong>{name}</strong><p>email: {email}</p> </p>
            <p style={{border:'1px solid gray', padding:'10px', margin:'10px'}}>{body}</p>
        </div>
    );
};

export default Comments;