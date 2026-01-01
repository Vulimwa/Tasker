const TaskDetails=({task})=>{
    return (
      <div className="task-details">
        <h4>{task.title}</h4>
        <p><strong>Description: </strong>{task.description}</p>
        <p><strong>Status: </strong>{task.status}</p>
        <p><strong>Priority: </strong>{task.priority}</p>
        <p><strong>Due Date: </strong>{task.due_date}</p>
        <p>{task.createdAt}</p>
      </div>
    );
}

export default TaskDetails