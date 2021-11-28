import React, { useContext, useState } from 'react';
import TodoContext from '../context/todoContext';

export const TodoItem = ({ state:todo }) => {

    const { state, dispatch } = useContext(TodoContext);

    const handleCompleted = ({ target }) => {

        dispatch({ type: 'UPDATE', payload: { id: todo.id, completed: target.checked } })

    }

    const handleRemove = () => {

        dispatch({ type: 'REMOVE', payload: { id: todo.id } });

    }

    return (
        <li key={ todo.id }>
            <span className={ todo.completed ? 'completed' : '' }>
                <input 
                    type="checkbox"
                    onChange={ handleCompleted }
                    defaultChecked={ todo.completed }
                />
                { todo.description }
            </span>
            <i 
                style={ state.btnCompleted ? { display: 'block' } : { display: 'none' } }
                className="fas fa-trash-alt"
                onClick={ handleRemove }
            ></i>
        </li>
    )

}
