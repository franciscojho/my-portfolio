import React, { useContext, useState } from 'react';
import TodoContext from '../context/todoContext';

export const TodoForm = () => {

    const [value, setValue] = useState('');

    const { dispatch } = useContext(TodoContext)

    const handleForm = ({ target }) => {

        setValue(target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (value) {
            dispatch({ type: 'ADD', payload: { id: new Date().getTime(), description: value, completed: false } });
            setValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                onChange={ handleForm }
                value={ value }
                placeholder="Add todo" />
            <button>
                Add
            </button>
        </form>
    )
}
