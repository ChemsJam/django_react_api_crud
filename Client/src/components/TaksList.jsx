import { useEffect, useState } from "react"
import { getAllTaks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard";

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

    return <div className="grid grid-cols-3 gap-3">
        {tasks.map(task => (
            <TaskCard task={task} key={task.id}/>            
        ))}
    </div>;
}