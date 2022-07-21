import React, { useState, useEffect } from 'react';
import './App.css';
import Moment from 'moment';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setText] = useState("");
  const [todos, setTodo] = useState([]);

  const formatDate = Moment().format('[The] Do [of] MMMM');
   
  

  useEffect(()=> {
    saveLocTodos();
  });

  useEffect(() =>{
    getLocTodos();
  }, []);

  const saveLocTodos =() => {
    if (todos.length > 0) {
    localStorage.setItem("todos", JSON.stringify(todos)); 
     }
  }

const getLocTodos = () => {
  if(localStorage.getItem("todos") === null) {
  localStorage.setItem("todos",JSON.stringify([]));
} else {
  let todoLoc = JSON.parse(localStorage.getItem("todos"))
  
setTodo(todoLoc);
  
  
}
}



  return (
    <div className="App">
      <header>
      <h1>Igor`s Todo</h1>
      </header>
      <h2 id="date">Today is : {formatDate} </h2>
      <Form inputText={inputText} todos={ todos } setTodo={ setTodo } setText={setText} />
      <TodoList setTodo={setTodo} todos={todos} />
    </div>
  );
}

export default App;
