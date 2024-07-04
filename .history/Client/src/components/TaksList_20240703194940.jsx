import { useEffect } from "react"
import { getAllTaks } from "../api/tasks.api"
export function TaksList() {

    useEffect(() => {
        function loadTasks(){
            const res = getAllTaks();
            console.log(res)
        }
        loadTasks();
    }, [])
    
  return <div>TaksList</div>;  
}