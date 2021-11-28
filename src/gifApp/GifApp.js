import React from 'react';
import GifProvider from './context/Gif/GifProvider';
import GifSearchBar from './components/GifSearchBar';
import GifList from './components/GifList';
import SearchProvider from './context/Search/SearchProvider';

const GifApp = () => {
    return (
        <div>
            <h1 className="text-5xl text-center py-8 font-semibold">Search for Gifs</h1>
            <SearchProvider>
                <GifProvider>
                    <GifSearchBar />
                    <GifList />
                </GifProvider>
            </SearchProvider>
        </div>
    )
}

export default GifApp;