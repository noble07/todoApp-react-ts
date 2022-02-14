export enum list {
  activeTasks,
  completedTasks
}

export interface ITodo {
  id: number
  todo: string
  isDone: boolean
  list: list
}

export type Actions =
  | {type: 'add'; payload: string;}
  | {type: 'remove'; payload: number;}
  | {type: 'done'; payload: number;}
  | {type: 'edit'; payload: {id: number, todo: string};}
  | {type: 'changeList'; payload: {id: number, list: list};}