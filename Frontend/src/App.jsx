import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {getTask, createTask,updateTask, deleteTask,} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await getTask();
      setTasks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {  fetchTasks();}, []);

  const handleAddTask = async (task) => {
    await createTask(task);
    fetchTasks(); };

  const handleUpdateTask = async (id, task) => {
    await updateTask(id, task);
    setEditingTask(null);
    fetchTasks();};

  const handleDeleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    await deleteTask(id);
    fetchTasks();};

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
       <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <TaskForm editingTask={editingTask} onAdd={handleAddTask} onUpdate={handleUpdateTask} />
          </div>
          <div className="lg:col-span-2">
            <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDeleteTask}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;