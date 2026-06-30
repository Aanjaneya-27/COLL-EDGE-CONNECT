import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          No Tasks Found
        </h2>
        <p className="text-gray-500 mt-3">
          Add your first task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete} /> ))}
    </div>
  );
};

export default TaskList;