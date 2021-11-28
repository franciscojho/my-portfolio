import React, { useState, useReducer } from 'react';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';

const SearchProvider = (props) => {

    const initialState = {
        query: ''
    };

    const [state, dispatch] = useReducer(searchReducer, initialState);

    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;