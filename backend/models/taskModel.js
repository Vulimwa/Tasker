const mongoose=require('mongoose');

const taskSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:['pending','in_progress','completed'],
            default:'pending',
            required:true
        },
        priority:{
            type:String,
            enum:['high','medium','low'],
            default:'high',
            required:true
        },
        due_date:{
            type:Date,
            required:true
        }
    },{timestamps:true}
);

const Tasks=mongoose.model('Tasks',taskSchema)
module.exports=Tasks