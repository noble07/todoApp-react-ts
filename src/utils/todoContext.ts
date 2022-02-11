import React, { createContext, Dispatch, Reducer } from "react";
import { Actions, ITodo } from "../model/model";

interface todoContext {
  todos: ITodo[]
  dispatch: React.Dispatch<Actions>
}

export const todoContext = createContext<todoContext>({} as todoContext)