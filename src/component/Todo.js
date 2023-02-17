import React from 'react'

function Todo({ todo, toggleTodo }) {
    function handleTodo() {
        toggleTodo(todo.id)
    }
    return (
        <div id='todo'>
            <input id='check' type={'checkbox'} checked = {todo.complete} onChange={handleTodo} />
            <label>{todo.name}</label>
        </div>
    )
}

export default Todo
