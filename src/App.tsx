import { useReducer, useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import InputField from './components/InputField'
import TodoList from './components/TodoList'
import './App.css'
import todoReducer from './utils/todoReducer'
import { todoContext } from './utils/todoContext'
import { list } from './model/model'

const App = () => {

  const [input, setInput] = useState<string>('')
  const [todos, dispatch] = useReducer(todoReducer, [])

  const handleAdd = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    if (!todos) return

    dispatch({type: 'add', payload: input})
    setInput('')
  }

  const onDragEnd = (result: DropResult) => {
    const {source, destination, draggableId} = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    if(destination.droppableId === 'todosRemove') return dispatch({
      type: 'changeList',
      payload: {
        id: parseInt(draggableId),
        list: list.completedTasks
      }})

    dispatch({
      type: 'changeList',
      payload: {
        id: parseInt(draggableId),
        list: list.activeTasks
      }
    })
  }

  return (
    <todoContext.Provider value={{todos, dispatch}} >
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Taskify</span>
          <InputField
            input={input}
            setInput={setInput}
            handleAdd={handleAdd}
          />
          <TodoList />
        </div>
      </DragDropContext>
    </todoContext.Provider>
  )
}

export default App
