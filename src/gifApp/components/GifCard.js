import React from 'react';

const GifCard = ({gif}) => {

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
            <img className="w-full" src={gif.images.downsized_large.url} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{gif.title}</div>
            </div>
        </div>
    )
    
}

export default GifCard;