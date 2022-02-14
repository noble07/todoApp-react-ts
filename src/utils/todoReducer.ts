import { Actions, ITodo, list } from "../model/model"

const todoReducer = (state: ITodo[], action: Actions) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false, list: list.activeTasks }
      ]
    
    case 'remove':
      return state.filter(todo => todo.id !== action.payload)

    case 'done':
      return state.map(todo => (
        todo.id === action.payload
        ? {...todo, isDone: !todo.isDone}
        : todo
      ))
    
    case 'edit':
      return state.map(todo => (
        todo.id === action.payload.id
        ? { ...todo, todo: action.payload.todo }
        : todo
      ))

    case 'changeList':
        return state.map(todo => (
          todo.id === action.payload.id
          ? { ...todo, list: action.payload.list }
          : todo
        ))

    default:
      return state
  }
}

export default todoReducer