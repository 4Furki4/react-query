import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPost } from './methods/posts'
import Posts from './Posts'
export default function Post({ id, setCurrentPage }) {
    const postQuery = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id)
    })

    if (postQuery.isLoading) return <h1>Loading</h1>

    if (postQuery.error) return <h1>{postQuery.error.message}</h1>

    return (
        <div>
            <button onClick={() => setCurrentPage(<Posts setCurrentPage={setCurrentPage} />)}>Go Back To List</button>
            <h1>{postQuery.data.title}</h1>
            <p>{postQuery.data.body}</p>
        </div>
    )
}
