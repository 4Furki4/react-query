import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getPost, getPosts } from './methods/posts'
import Post from './Post'
export default function Posts({ setCurrentPage }) {
    const client = useQueryClient()
    function preFetchOnMouseHover(id) {
        client.prefetchQuery({
            queryKey: ['post', id],
            queryFn: () => getPost(id),
            staleTime: 1000 * 60
        })
    }
    const { isLoading, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })

    if (error) return 'An error has occured ' + error.message

    if (isLoading) return 'Loading...'

    return (
        <>
            {data.map(item =>
                <li onMouseOver={() => preFetchOnMouseHover(item.id)} key={item.id}
                    onClick={() => setCurrentPage(<Post id={item.id} setCurrentPage={setCurrentPage} />)}>
                    {item.title}
                </li>)}
        </>
    )
}
