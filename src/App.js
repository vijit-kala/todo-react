import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <header>TODO APP</header>
      </div>
      <div className='main-content'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
