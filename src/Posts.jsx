import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
export default function Posts() {
    const [id, setId] = useState(1)

    const URL = "https://jsonplaceholder.typicode.com/posts"

    const { isLoading, error, data } =
        useQuery(['posts'], () => fetch(URL).then(res => res.json()))

    if (error) return 'An error has occured ' + error.message

    if (isLoading) return 'Loading...'

    if (!isLoading) console.log(data);
    const items = data.map(item => <li>{item.title}</li>)
    return (
        <>

            {data.map(item => <li>{item.title}</li>)}

        </>

    )
}
