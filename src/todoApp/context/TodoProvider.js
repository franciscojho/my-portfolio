import React, { useReducer, useEffect } from 'react';
import TodoContext from './todoContext';
import { initializer, todoReducer } from './todoReducer';

const initialState = {
    btnAll: true,
    btnActive: false,
    btnCompleted: false,
    todos: []
}

const TodoProvider = (props) => {

    const [state, dispatch] = useReducer(todoReducer, initialState, initializer);

    useEffect(() => {
        localStorage.setItem("todoAppState", JSON.stringify(state));
      }, [state]);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;