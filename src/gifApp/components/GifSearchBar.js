import React, { useContext, useState } from 'react';
import SearchContext from '../context/Search/searchContext';

const GifSearchBar = () => {

    const [value, setValue] = useState('');

    const { state, dispatch } = useContext(SearchContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type:'SET_QUERY', payload: value });
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className="p-8">
                    <div className="bg-white flex items-center rounded-full shadow-xl">
                        <input 
                            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                            onChange={ (e) => setValue(e.target.value) }
                            value={value}
                            name="search"
                            type="text" 
                            placeholder="Search" 
                        />
                        <div className="p-4">
                            <button 
                                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                            >
                                icon
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
    
}

export default GifSearchBar;
