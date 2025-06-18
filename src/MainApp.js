import { use, useEffect,useState } from "react"; 
import ToDoItem from "./components/ToDoItem";


function ToDoApp(){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
            .then( (res)=>{
                if (!res.ok) throw new Error("Incorrect Api");
                return res.json();    
            })
            .then( (data)=>{
                setTodos(data);
                setLoading(false);
                console.log(todos);
            })
            .catch( (err)=>{
                setError(err.message);
                setLoading(false);
            })
    },[]);

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

if (loading) return <p>Σφάλμα</p>
if (error) return <p>Προσοχή</p>

return(
    <div>
    <h1 className="text-3xl font-bold mb-4">My To Do List</h1>
    <ul>
        {todos.map((todo)=>(
          <ToDoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
   </ul> 
    </div>
);
}
export default ToDoApp;
