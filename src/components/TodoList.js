import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodo }) => {
  console.log(todos);
    return(
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map(todo => (
              <Todo 
              setTodo={setTodo} 
              todos={todos}
              todo={todo}
              key={todo.id}
              text={todo.text}/>
            ))}
          </ul>
        </div>
    );
};

export default TodoList;