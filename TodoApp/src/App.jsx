import { createContext, useEffect, useState } from 'react'
// import './App.css'
import { todoContext, TodoProvider, useTodo } from './contexts/index';
import TodoForm from './components/TodoForm';
import TodoItem from './components/Todoitem';

function App() {
  // const [seq,setSeq] = useState(0);
  // const SeqContext = createContext({seq,setSeq});

  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos((prev) => [
      { id: Date.now(), ...todo }, ...prev
    ]);
    
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (
        prevTodo.id === todo.id ? todo : prevTodo
      ))
    )
  }
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((ele) =>
        ele.id !== id
      )
    )
  }
  // prev represent current todos
  //'prevTodo' and 'ele' are current element of todos (in process in functions) which are basically an object as todos is an array of objects
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((ele) =>
        (ele.id === id ? { ...ele, completed: !ele.completed } : ele))
    )
  }

  // when components mounts update the todos with current status of todos
  // from querying the local storage( only works at starting)
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // update local storage with every update in todos after querying it
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{
      todos, addTodo, updateTodo, deleteTodo,
      toggleComplete
    }}>
      <h1 className='text-center text-5xl bg-amber-300 rounded-lg mx-120 py-10'>
        manage your tasks
      </h1>
      <TodoForm />
      {
        todos.map((todo) => (

          <div key={todo.id}>


            <TodoItem todo={todo} />


          </div>
        ))
      }

    </TodoProvider>
  )
}

export default App
