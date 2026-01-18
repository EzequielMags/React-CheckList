import { useEffect, useState } from "react"
import TodoContext from "../TodoContext.js"

const TODOS = "todos"

export default function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS)

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : [])

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos))
  }, [todos])


  const addTodo = (formData) => {
    const description = formData.get("description")
    setTodos(prevState => {
      const newTodo = {
        id: Number(prevState.length + 1),
        description, //description: description
        completed: false,
        createdAt: new Date().toISOString()
      }
      return [...prevState, newTodo]
    })
  }

  const toggleTodoCompleted = (todo) => {
    setTodos(prevState => {
      return prevState.map(t => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed
          }
        }
        return t
      })
    })
  }

  const deleteTodo = (todo) => {

    setTodos(prevState => {
      return prevState.filter(t => t.id != todo.id)
    })
  }

  return (
    <TodoContext
      value={
        {
          todos,
          addTodo,
          toggleTodoCompleted,
          deleteTodo
        }
      }>
      {children}
    </TodoContext>
  )
}