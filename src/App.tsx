import { useReducer, useState } from 'react'

import { ITodo } from './model/model'

import InputField from './components/InputField'
import TodoList from './components/TodoList'
import './App.css'
import todoReducer from './utils/todoReducer'
import { todoContext } from './utils/todoContext'

const App = () => {

  const [input, setInput] = useState<string>('')
  const [todos, dispatch] = useReducer(todoReducer, [])

  const handleAdd = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    if (!todos) return

    dispatch({type: 'add', payload: input})
    setInput('')
  }

  return (
    <todoContext.Provider value={{todos, dispatch}} >
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField
          input={input}
          setInput={setInput}
          handleAdd={handleAdd}
        />
        <TodoList />
      </div>
    </todoContext.Provider>
  )
}

export default App
