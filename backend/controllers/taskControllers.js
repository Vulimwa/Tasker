const tasks = require("../models/taskModel");

// Getting all Tasks
const getTasks= async(req,res)=>{
    try {
        const allTasks=await tasks.find().limit(5)
        res.status(200).json(allTasks)
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
};

// Getting one Task
const oneTask = async (req, res) => {
  try {
    const oneTask = await tasks.findById(req.params.id);
    if (!oneTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    else{
        res.status(200).json(oneTask);
    }
  } catch (error) {
    res.status(400);
    console.error({ error: error.message });
  }
};

// Creating a Task
const createTask=async (req,res)=>{
    const{Title,Description,Status,Priority,Due_date}=req.body
    try {
        const newTask=await tasks.create({Title,Description,Status,Priority,Due_date});
        res.status(200).json(newTask);
    } catch (error) {
        res.status(400)
        console.error({error:error.message})
    }
};

// Updating a Task
const updateTask= async(req,res)=>{
    try {
        const updateTask= await tasks.findByIdAndUpdate(req.params.id)
        if (!updateTask) {
          return res.status(404).json({ message: "Task not found" });
        }
        else{
            res.status(200).json("Updated one task");
        }
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
};

// Deleting all Tasks
const deleteTasks=async(req,res)=>{
    try {
        const allTasks= await tasks.deleteMany()
        if (!allTasks) {
          return res.status(404).json({ message: "Tasks not found" });
        }
        else{
            res.status(200).json(`Deleted all tasks`);
        }

    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
};

// Deleting one Task
const deleteTask=async(req,res)=>{
    try {
        const oneTask= await tasks.findByIdAndDelete(req.params.id)
        if (!oneTask) {
          return res.status(404).json({ message: "Task not found" });
        }
        else{
            res.status(200).json(`Deleted one task`);
        }
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
};

module.exports = {
  getTasks,
  oneTask,
  createTask,
  updateTask,
  deleteTasks,
  deleteTask
};
