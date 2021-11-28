import React, { useReducer } from 'react';
import GifContext from './gifContext';
import gifReducer from './gifReducer';


const GifProvider = (props) => {

    const initialState = {
        gifs: [],
        loading: false
    }

    const [gifState, gifDispatch] = useReducer(gifReducer, initialState);

    return (
        <GifContext.Provider value={{ gifState, gifDispatch }}>
            {props.children}
        </GifContext.Provider>
    )
}

export default GifProvider;