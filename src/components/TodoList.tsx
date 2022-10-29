import { Todos } from "../Model"
import "./style.css"



interface Props{
    todos: Todos[],
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>

}


const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className="todo">
        {
            todos.map((todo) =>(
                <li>{todo.todo}</li>
            ))
        }
    </div>
  )
}

export default TodoList