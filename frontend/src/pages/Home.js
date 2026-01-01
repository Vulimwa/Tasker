import { useEffect,useState } from "react"


// components
import TaskDetails from "../components/taskDetails";
import TaskForm from "../components/taskForm";

const Home=()=>{
const [tasks,setTask]=useState(null);
useEffect(()=>{
    const fetchTask=async()=>{
        const response = await fetch("/api/tasks");
        const json= await response.json()

        if(response.ok){
            setTask(json)
        }
    }
    fetchTask();
},[])
    return(
        <div className="Home">
            <div className="tasks">
                {tasks && tasks.map((task)=>(
                    <TaskDetails key={task._id} task={task}/>
                ))}
                <TaskForm/>
            </div>
        </div>
    )
}

export default Home