import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TodoDetails = ({todo}) => {
  const { dispatch } = useTodosContext()

  const handleClick = async () => {
    const response = await fetch('/api/todos/' + todo._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_TODO', payload: json})
    }
  }
  return (
    <div className='todo-details'>
        <h4>{todo.title}</h4>
        <h5 className='desc'>{todo.description}</h5>
        {/* <button type='radio'>{todo.completed}</button> */}
        <p>{formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true})}</p>
        <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default TodoDetails