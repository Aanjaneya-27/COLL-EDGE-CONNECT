const express = require ("express");
const {getTask, createTask, updateTask, deleteTask} = require("../controller/TaskController");
const router = express.Router();

router.route("/")
.get(getTask)
.post(createTask);

router.route("/:id")
.put(updateTask)
.delete(deleteTask)


module.exports = router;