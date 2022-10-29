import { Todos } from "../Model"
import "./style.css"
import TodoCard from "./TodoCard"



interface Props{
    todos: Todos[],
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>

}


const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className="todo">
        {
            todos.map((todo) =>(
                <TodoCard
                key={todo.id}
                todo={todo}
                setTodos = {setTodos}
                todos = {todos}
                 />
            ))
        }
    </div>
  )
}

export default TodoList