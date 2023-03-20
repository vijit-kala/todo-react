import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo !== '') {
      const newTodos = [...todos, { id: todos.length, text: newTodo }];
      setTodos(newTodos);
      setNewTodo('');
    }
  };

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEditTodo = (id, newText) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className='TodoApp'>
      <div className='AddTodo'>
        <input
          type='text'
          placeholder='Add new todo'
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              id={todo.id}
              text={todo.text}
              onEditTodo={handleEditTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
