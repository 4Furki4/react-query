import axios from "axios"
const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export function getPosts() {
    return axios.get(`${BASE_URL}posts`).then(response => response.data)
}

export function getPost(id) {
    return fetch(`${BASE_URL}posts/${id}`)
        .then(response => response.json())
        .then(json => json)
}