import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [due_date, setDate] = useState("");
  const [error, setError]=useState(null)

const handleSubmit=async (e) => {
    e.preventDefault()
    const task={title,description,status,priority,due_date}

    const response = await fetch("/api/tasks",{
        method:"POST",
        body:JSON.stringify(task),
        headers:{
            "Content-Type":"application/json"
        }
    });
    
    const json= await response.json()

    if(!response.ok){
        setError(json.error)
    }

    if (response.ok){
        setTitle("");
        setDescription("");
        setPriority("");
        setStatus("");
        setDate("");
        setError("null");
        console.log("New Task Added")
    }
};

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Task</h3>

      <label htmlFor="title">Title</label> <br />
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="description">Description</label> <br />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label htmlFor="status">Status</label> <br />
      <input
        type="text"
        id="status"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      />

      <label htmlFor="priority">Priority</label> <br/>
      <input
        type="text"
        id="priority"
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
      />

      <label htmlFor="due_date">Due Date</label> <br/>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={due_date}
      />
      <button type="submit">Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
