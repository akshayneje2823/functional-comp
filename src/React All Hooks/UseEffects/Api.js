import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Api() {
    const [Post, setPost] = useState([]);
    const [Id, setId] = useState(1)

    useEffect(()=>{
        axios.get("http://fakeapi.jsonparseronline.com/posts/$")
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(error=>console.log(error))
    },[])
    
  return (
    <div>
        <input type="text" onChange={e => e.target.value} value={Id}  />
       <ul>
            {
                Post.map(Post => (<li key={Post.id}>{Post.title}</li>
            ))}
       </ul>
    </div>
  )
}

export default Api