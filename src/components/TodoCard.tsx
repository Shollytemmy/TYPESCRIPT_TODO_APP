import React from 'react'
import { Todos } from '../Model'
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import {MdDownloadDone} from 'react-icons/md'

type Props = {
    todo: Todos,
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
    todos: Todos[]
}


const TodoCard = ({todo, setTodos, todos}: Props) => {
  return (
    <form className="todos__card">
        <span className="card__text">{todo.todo}</span>
        <div>
            <span className="icon">{<AiFillEdit />}</span>
            <span className="icon">{<MdDownloadDone />}</span>
            <span className="icon">{<AiFillDelete />}</span>
        </div>
    </form>
  )
}

export default TodoCard