import React, { useState } from 'react'
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

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))

  }

  const handleDelete = (id: number) =>{

    setTodos(todos.filter((todo) => todo.id !== id))

  }

  const handleEdit = (e:React.FormEvent, id: number) => {

    e.preventDefault()

    setTodos(todos.map((todo) => {
      return (
        todo.id === id ? {...todo, todo: editTodo} : todo
      )
    }))

    setEdit(false)
  }
  return (
    <form className="todos__card" onSubmit={(e) => handleEdit(e, todo.id)}>

      {
        edit ? (
          <input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todos__text'/>
        ) : (
          <span className="card__text" style={todo.completed ? {textDecoration: "line-through"}: undefined}>{todo.todo}</span>

        )
      }

        
        <div>
            <span className="icon" onClick={() => {
              if(!edit && !todo.completed){
                setEdit(!edit)
              }
              

            }}>{<AiFillEdit />}</span>
            <span className="icon" onClick={() => handleDone(todo.id)}>{<MdDone />}</span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>{<AiFillDelete />}</span>
        </div>
    </form>
  )
}

export default TodoCard