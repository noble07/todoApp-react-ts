export interface ITodo {
  id: number
  todo: string
  isDone: boolean
}

export type Actions =
  | {type: 'add'; payload: string;}
  | {type: 'remove'; payload: number;}
  | {type: 'done'; payload: number;}
  | {type: 'edit'; payload: {id: number, todo: string};}