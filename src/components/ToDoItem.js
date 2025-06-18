function ToDoItem({todo}){

return (
<li>
  <input type="checkbox" checked={todo.completed} readOnly />
  {todo.title}
</li>
);

}

export default ToDoItem;