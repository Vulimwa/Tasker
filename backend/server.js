require('dotenv').config();
const express=require('express');
const taskRoutes=require('./routes/tasks')
const connectDB=require('./config/db')
const app=express();

// MiddleWares
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// Routing
app.use('/api/tasks/',taskRoutes)

// Listening for requests
connectDB().then(()=>{
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server Running on http://locahost:${process.env.PORT}`);
    });
})