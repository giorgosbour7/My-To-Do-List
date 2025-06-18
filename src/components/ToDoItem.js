function ToDoItem({ todo, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={todo.completed} readOnly className="w-5 h-5" />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}


export default ToDoItem;