import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  // Pgination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setFetchData(true)
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(result.data);
      setFetchData(false);
    }
    fetchPost();
  }, [])

  // Get current posts
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPost = posts.slice(indexOfFirstPage,indexOfLastPage)

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Post posts={currentPost} fetchData={fetchData}/>
    </div>
  )
}

export default App