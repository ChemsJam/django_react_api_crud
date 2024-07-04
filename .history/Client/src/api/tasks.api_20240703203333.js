import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTaks = () => {
    return taskApi.get('/')
}

export const createTask = (task) => {
    return taskApi.post('/', task)
}