import { useEffect } from "react"
import { getAllTaks } from "../api/tasks.api"
export function TaksList() {

    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTaks();
            console.log(res)
        }
        loadTasks();
    }, [])
    
  return <div>TaksList</div>;  
}