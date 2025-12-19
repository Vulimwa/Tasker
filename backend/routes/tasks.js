const express=require('express');
const router=express.Router();
const {getTasks, oneTask, createTask, updateTask,deleteTasks, deleteTask}=require('../controllers/taskControllers')

// Get all tasks
router.get('/',getTasks);

// Get by Id
router.get('/:id', oneTask);

// Create task
router.post('/',createTask);

// Update a task
router.patch('/:id',updateTask);

// Deleting all tasks
router.delete('/',deleteTasks);

// Deleting as single task
router.delete('/:id',deleteTask);

module.exports=router