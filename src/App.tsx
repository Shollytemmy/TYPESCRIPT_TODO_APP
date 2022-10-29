import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todos } from './Model';

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todos[]>([])


  const addTodo = (e:React.FormEvent) =>{
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, completed: false}])
     

    }

     setTodo("")


    
    

  }
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo = {todo} setTodo = {setTodo} addTodo = {addTodo}  />
    </div>
  );
}

export default App;
