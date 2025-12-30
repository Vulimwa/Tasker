const TaskDetails=({task})=>{
    return (
      <div className="task-details">
        <h4>{task.Title}</h4>
        <p><strong>Description: </strong>{task.Description}</p>
        <p><strong>Status: </strong>{task.Status}</p>
        <p><strong>Priority: </strong>{task.Priority}</p>
        <p><strong>Due Date: </strong>{task.Due_date}</p>
        <p>{task.createdAt}</p>
      </div>
    );
}

export default TaskDetails