import React from 'react'
import { Todos } from '../Model'
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

type Props = {
    todo: Todos,
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
    todos: Todos[]
}


const TodoCard = ({todo, setTodos, todos}: Props) => {

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))

  }

  const handleDelete = (id: number) =>{

  }
  return (
    <form className="todos__card">

        <span className="card__text" style={todo.completed ? {textDecoration: "line-through"}: undefined}>{todo.todo}</span>
        <div>
            <span className="icon">{<AiFillEdit />}</span>
            <span className="icon" onClick={() => handleDone(todo.id)}>{<MdDone />}</span>
            <span className="icon">{<AiFillDelete />}</span>
        </div>
    </form>
  )
}

export default TodoCard