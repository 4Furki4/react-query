// export function getPosts() {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => json)
// }

import axios from "axios"

export function getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)
}

export function getPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => json)
}