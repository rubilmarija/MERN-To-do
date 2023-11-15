import React, { useState } from 'react'

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [title, setTitle] = useState('')
    const [error, setError] = useState(null)


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
        }
        if (response.ok) {
            setTitle('')
            setDescription('')
            setError(null)
            console.log('New todo task added', json);
        }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add new todo task</h3>

        <label>Todo:</label>
        <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />

        <label>Description:</label>
        <input
            type='text'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
        />

        <button>Add new todo task</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default TodoForm