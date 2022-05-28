import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Example.css'

function Api() {
  const [post,setPost] = useState({});
  const [id, setId] = useState(1);
  const [button, setbutton] = useState(1);
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${button}`)
    .then(res =>{
      setPost(res.data)
      console.log(res)
    })
    .catch(err =>{
      setPost("id does not exist")
    })
  },[button]);
  
let onchangeHandler = (e) =>{
  setId(e.target.value)
}

  let clickHandler = () =>{
    setbutton(id)
  } 
  return (
    <div className='center'>
      <input type="text" value={id} onChange={onchangeHandler}/>
      <button type='button' onClick={clickHandler}> Fetch Post</button>
      <div>{post.title}</div>
        {/* <ul>
          {
            post.map(post =>(<li key={post.id}>{post.title}</li>

          ))}
        </ul> */}
    </div>
  )
}

export default Api



// https://jsonplaceholder.typicode.com/posts