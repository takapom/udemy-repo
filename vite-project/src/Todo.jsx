import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
        <input type="checkbox" checked={todo.completed} readOnly/>
      {todo.name}
    </div>
  )
}

export default Todo
