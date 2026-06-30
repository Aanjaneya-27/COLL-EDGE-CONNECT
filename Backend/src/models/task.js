const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is Required"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "description is required"],
            trim: true
        },
        status: {
            type: String,
            enum:["Pending", "Completed"],
            default: "Pending"
        }
    },{timestamps:true});

    module.exports = mongoose.model("Task", TaskSchema)

