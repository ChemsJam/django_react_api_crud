
export const getAllTaks = () => {
    axios.get('http://localhost:8000/tasks/api/v1/tasks')
}