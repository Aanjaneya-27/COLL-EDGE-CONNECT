const express = require('express')
const cors = require("cors")
const taskRoutes = require("../src/routes/taskRoutes")

const app = express()


app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Task Track App is Running")
})
app.use("/api/tasks", taskRoutes)


module.exports = app;