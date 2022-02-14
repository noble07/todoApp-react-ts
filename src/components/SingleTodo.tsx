import React, { useContext, useEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

import {ITodo} from '../model/model'
import { todoContext } from '../utils/todoContext'

interface Props {
  todo: ITodo
  index: number
}

const SingleTodo = ({todo, index}: Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)
  const {dispatch} = useContext(todoContext)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])
  

  const handleDone = (id: number) => {
    dispatch({type: 'done', payload: id})
  }

  const handleDelete = (id: number) => {
    dispatch({type: 'remove', payload: id})
  }

  const handleEdit = () => {
    if (edit || todo.isDone) return

    setEdit(!edit)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault()

    dispatch({
      type: 'edit',
      payload: {
        id,
        todo: editTodo
      }
    })

    setEdit(false)
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>

      {(provided) => (
        <form
          className='todos__single'
          onSubmit={(e) => handleSubmit(e, todo.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <input className='todos__single--text' ref={inputRef} value={editTodo} onChange={e => setEditTodo(e.target.value)} />
          ) : todo.isDone ? (
            <s className="todos__single--text">
              {todo.todo}
            </s>
          ) : (
            <span className="todos__single--text">
              {todo.todo}
            </span>
          )}
          <div>
            <span className='icon' onClick={handleEdit}>
            <AiFillEdit />
            </span>
            <span className='icon' onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
            </span>
            <span className='icon' onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}

    </Draggable>
  )
}

export default SingleTodo