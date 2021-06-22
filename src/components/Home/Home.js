import React,{ useEffect, useState} from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        const url = 'http://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(response => response.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1>Home</h1>
            <h4>'{posts.length}' post today</h4>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;