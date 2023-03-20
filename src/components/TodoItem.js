import React, { useState } from 'react';

function TodoItem({ id, text, onEditTodo, onDeleteTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    onEditTodo(id, newText);
    setEditMode(false);
  };

  const handleDeleteClick = () => {
    onDeleteTodo(id);
  };

  const handleNewTextChange = (event) => {
    setNewText(event.target.value);
  };

  if (editMode) {
    return (
      <div className='TodoItem'>
        <input type='text' value={newText} onChange={handleNewTextChange} />
        <button onClick={handleSaveClick}>Save</button>
      </div>
    );
  } else {
    return (
      <div className='TodoItem'>
        <span>{text}</span>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
