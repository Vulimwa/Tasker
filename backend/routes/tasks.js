const express=require('express');
const router=express.Router();
const tasks=require('../models/taskModel')

// GET ALL TASKS
router.get('/',async(req,res)=>{
    try {
        const allTasks=await tasks.find().limit(5)
        res.status(200).json(allTasks)
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
});

// GET BY ID
router.get('/:id', async(req,res)=>{
    try {
        const oneTask= await tasks.findById(req.params.id)
        if (!oneTask) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(oneTask)
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
});

// CREATING A TASK
router.post('/',async (req,res)=>{
    const{Title,Description,Status,Priority,Due_date}=req.body
    try {
        const newTask=await tasks.create({Title,Description,Status,Priority,Due_date});
        res.status(200).json(newTask);
    } catch (error) {
        res.status(400)
        console.error({error:error.message})
    }
});

// UPDATING A TASK
router.patch('/:id',async(req,res)=>{
    try {
        const updateTask= await tasks.findByIdAndUpdate(req.params.id)
        if (!updateTask) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json('Updated one task')
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
});

// DELETING ALL TASKS
router.delete('/',async(req,res)=>{
    try {
        const allTasks= await tasks.deleteMany()
        res.status(200).json(`Deleted all tasks`)
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
});

// DELETING A SINGLE TASK
router.delete('/:id',async(req,res)=>{
    try {
        const oneTask= await tasks.findByIdAndDelete(req.params.id)
        if (!oneTask) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(`Deleted one task`)
    } catch (error) {
        res.status(400)
        console.error({ error: error.message });
    }
});

module.exports=router