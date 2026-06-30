const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {task.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

          <span
            className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-medium
            ${
              task.status === "Completed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700" }`} >
            {task.status}
          </span>
        </div>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(task)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Edit
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;