import { useContext } from 'react'
import { ITodo } from '../model/model'
import { todoContext } from '../utils/todoContext'
import SingleTodo from './SingleTodo'
import './styles.css'

const TodoList = () => {

  const {todos} = useContext(todoContext)

  return (
    <div className='todos'>

      {
        todos.map(todo => (
          <SingleTodo
            key={todo.id}
            todo={todo}
          />
        ))
      }
    </div>
  )
}

export default TodoList