import { useContext } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { list } from '../model/model'
import { todoContext } from '../utils/todoContext'
import SingleTodo from './SingleTodo'
import './styles.css'

const TodoList = () => {

  const {todos} = useContext(todoContext)

  return (
    <div className='container'>
      <Droppable droppableId='todosList'>
        {(provided) => (
          <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
            <span className='todos__heading'>
              Active Tasks
            </span>
            {todos.map((todo, index) => (
              todo.list === list.activeTasks && <SingleTodo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='todosRemove'>
        {(provided) => (
          <div className='todos remove' ref={provided.innerRef} {...provided.droppableProps}>
            <span className='todos__heading'>
              Completed Tasks
            </span>
            {todos.map((todo, index) => (
              todo.list === list.completedTasks && <SingleTodo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList