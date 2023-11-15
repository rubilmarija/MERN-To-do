import React, { useEffect } from "react"
import {  useTodosContext } from '../hooks/useTodosContext'

// components
import TodoDetails from '../components/TodoDetails'
import TodoForm from "../components/TodoForm"

const Home = () => {
  // const [todos, setTodos] = useState(null);

  const {todos, dispatch} = useTodosContext()

  useEffect(() => {
    const fetchTodos = async () => {
      // const response = await fetch('http://localhost:4000/api/todos')
      
      const response = await fetch('/api/todos')

      const json = await response.json()

      if (response.ok) {
        // setTodos(json)
        dispatch({type: 'SET_TODOS', payload: json})
      }
    }

    fetchTodos()
  }, [dispatch])

  return (
    <div className="home">
      <div className="todos">
        {todos && todos.map((todo) => (
          <TodoDetails key={todo._id} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default Home
