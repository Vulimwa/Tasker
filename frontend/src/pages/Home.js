import { useEffect,useState } from "react"

const Home=()=>{
const [tasks,setTask]=useState(null);
useEffect(()=>{
    const fetchTask=async()=>{
        const response = await fetch("/api/tasks/");
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
                    <p key={task._id}>{task.Title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home