import React, { useContext, useReducer } from 'react';
import TodoContext from '../context/todoContext';

export const TodoHeader = () => {

    const { state, dispatch } = useContext(TodoContext);

    return (
        <div className="todo-header">
            <button 
                name="all"
                className={ state.btnAll ? 'selected' : '' }
                onClick={() => dispatch({type: 'ALL'})}
            >
                All
            </button>
            <button
                name="active" 
                className={ state.btnActive ? 'selected' : '' }
                onClick={() => dispatch({type: 'ACTIVE'})}
            >
                Active
            </button>
            <button
                name="completed" 
                className={ state.btnCompleted ? 'selected' : '' }
                onClick={() => dispatch({type: 'COMPLETED'})}
            >
                Completed
            </button>
      </div>
    )
}
