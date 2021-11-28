import React from 'react';

export default (state, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                query: action.payload
            }
        default:
            return {
                state
            }
    }
}