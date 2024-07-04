import { useEffect, useState } from "react"
import { getAllTaks } from "../api/tasks.api"
export function TaksList() {

    useState [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTaks();
            setTasks(res.data);
        }
        loadTasks();
    }, [])
    
  return <div>
    {tasks.map(task => {
        <div>
            <h1>{task.tittle}</h1>
            <p>{task.description}</p>
        </div>
    })}
    </div>;  
}