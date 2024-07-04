import { useEffect, useState } from "react"
import { getAllTaks } from "../api/tasks.api"

export function TaksList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTaks();
            setTasks(res.data);
            console.log(res)
        }
        loadTasks();
    }, []);

    return <div>
        {tasks.map(task => (
            <div key="id" >
                <h1>{task.tittle}</h1>
                <p>{task.description}</p>
            </div>
        ))}
    </div>;
}