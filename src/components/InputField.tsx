import React from 'react'
import './style.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addTodo: (e: React.FormEvent) => void
}

const InputField = ({todo, setTodo, addTodo}: Props) => {
  return (
    <form className='input' onSubmit={addTodo}>
        <input 
        type="text" 
        name="" 
        id=""
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
         placeholder='Type Here ...'
          className='input__box'
          />
        <button type='submit' className='input__submit'>Go</button>
    </form>
  )
}

export default InputField