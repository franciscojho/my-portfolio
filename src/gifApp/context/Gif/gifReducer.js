import React from 'react';

export default (state, action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return {
                ...state,
                gifs: action.payload
            }
            
        default:
            return {
                state
            }
    }
}