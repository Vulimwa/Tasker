const mongoose=require('mongoose');

const taskSchema= new mongoose.Schema(
    {
        Title:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        },
        Status:{
            type:String,
            enum:['pending','in_progress','completed'],
            default:'pending',
            required:true
        },
        Priority:{
            type:String,
            enum:['high','medium','low'],
            default:'high',
            required:true
        },
        Due_date:{
            type:Date,
            required:true
        }
    },{timestamps:true}
);

const Tasks=mongoose.model('Tasks',taskSchema)
module.exports=Tasks