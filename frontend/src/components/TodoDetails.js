import React from 'react'

const TodoDetails = ({todo}) => {
  return (
    <div className='todo-details'>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        {/* <button type='radio'>{todo.completed}</button> */}
        <p>{todo.createdAt}</p>
    </div>
  )
}

export default TodoDetails