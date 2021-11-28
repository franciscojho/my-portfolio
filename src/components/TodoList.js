import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

    const { state, dispatch } = useContext(TodoContext);

    const handleRemoveAll = () => {

        if ( state.todos.filter( todo => todo.completed ).length > 0 ) {
            dispatch({ type: 'REMOVE_ALL' })
        }

    }

    return (
        <div className="todo-list">

            <ul>
                {
                    state.btnAll && state.todos.map( todo => 
                        <TodoItem key={ todo.id } state={ todo } />
                    )
                        
                }

                {
                    state.btnActive && state.todos.map( todo => !todo.completed &&
                        <TodoItem key={ todo.id } state={ todo } />
                    )
                        
                }

                {
                    state.btnCompleted && state.todos.map( todo => todo.completed &&
                        <TodoItem key={ todo.id } state={ todo } />
                    )
                        
                }
            </ul>

            <button 
                style={ state.btnCompleted ? { display: 'block' } : { display: 'none' } }
                onClick={ handleRemoveAll }
            >
                Delete All  
            </button>
        </div>
    )
}
