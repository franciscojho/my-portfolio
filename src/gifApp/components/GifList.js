import React, { useContext, useEffect } from 'react';
import GifContext from '../context/Gif/gifContext';
import SearchContext from '../context/Search/searchContext';
import GifCard from './GifCard';


const GifList = () => {

    const { gifState, gifDispatch } = useContext(GifContext);
    
    const { state } = useContext(SearchContext);

    const { gifs } = gifState;

    const { query } = state;

    useEffect(() => {

        async function setGifs (query) {
            try {
                // dispatch({ type: 'SENDING_REQUEST' });
                const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=8fFoXo1eoAxH3cqqeFUESDeQ3Ncirx3v&q=${query}`);
                const { data } = await res.json();
                gifDispatch({ type: 'SET_GIFS', payload: data });
                return res;
                // dispatch({ type: 'REQUEST_FINISHED' });
            } catch(err) {
                console.log({err});
                return err;
            }
        }

        setGifs(query);

    }, [query]);
    
    return (
        <div className="flex flex-row flex-wrap justify-evenly px-6">
            {
               gifs.length > 0 ? gifs.map( gif => 
                    <GifCard gif={gif} key={gif.id}/> 
                ) : <p className="text-4xl text-gray-400 mt-20"> Keep Searching... </p>
            }
        </div>
    )

}

export default GifList;
