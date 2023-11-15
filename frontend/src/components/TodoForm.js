import React, { useState } from 'react'
import {  useTodosContext } from '../hooks/useTodosContext'


const TodoForm = () => {
    const { dispatch } = useTodosContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [title, setTitle] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const todo = {title, description}

        const response = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setDescription('')
            setError(null)
            setEmptyFields([])
            console.log('New todo task added', json)
            dispatch({type: 'CREATE_TODO', payload: json})
        }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add new task</h3>

        <label>Task:</label>
        <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
        />

        <label>Description:</label>
        <input
            type='text'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
        />

        <button>Add new task</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default TodoForm