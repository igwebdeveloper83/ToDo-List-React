import React from 'react';

const Todo = ({ text, todo, todos, setTodo }) => {

    const deleteTodo = () => {
        setTodo(todos.filter((elem)=> elem.id !== todo.id))
    };

    const checkTodo = () => {
        setTodo(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
               
            }
            return item;
            
        }))
       
    }
    return(
       <div className="todo">
        <li className={`todo-item ${todo.completed ? "checked": ""}`}>{text}
        <button onClick={checkTodo} className="check-btn"></button>
        <button onClick={deleteTodo} className="delete-btn"></button>
        </li>
        
       </div>
    );
}

export default Todo;