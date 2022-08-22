import React from 'react'

export default function Post({ posts, fetchData }) {
    if (fetchData) {
        return <h2>Loading...</h2>
    }
    return (
        <ul className='list-group mb-4'>
            {
                posts.map(post =>(
                    <li className='list-group-item' key={post.id}>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    )
}
