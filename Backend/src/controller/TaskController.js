const Task = require('../models/task');

const getTask = async (req, res) => {
    try{
        const tasks = await Task.find().sort({createdAt: -1})
        res.status(200).json({
            success:true,
            count:tasks.length,
            data:tasks
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

const createTask = async (req, res) => {
    try{
        const {title, description, status} = req.body;
        if(!title || !description){
            return res.status(400).json({
                success: false,
                message: "Title is required"
            })
        }

        const task = await Task.create({
            title,
            description,
            status
        })
        res.status(201).json({
            success:true,
            data:task
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({
                success:true,
                message:"Task not Found"
            })
        }

        res.status(200).json({
            success:true,
            data:task
        })
    }catch(error){
          res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

const deleteTask = async(req, res) => {
    try{
    const task = await Task.findById(req.params.id)
    if(!task){
        return res.status(404).json({
            success:false,
            message:"task not found"
        })
    }
    await task.deleteOne();
    res.status(200).json({
        success:true,
        message:"Task deleted successfully"
    })
 }catch(error){
    res.status(500).json({
        success: false,
        message: error.message
    })
  }
}

module.exports = {getTask, createTask, updateTask, deleteTask};
