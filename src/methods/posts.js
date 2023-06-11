import api from './api'
export function getPosts() {
    return api.get('/posts').then(response => response.data)
}

export function getPost(id) {
    return api.get(`/posts/${id}`).then(response => response.data)
}