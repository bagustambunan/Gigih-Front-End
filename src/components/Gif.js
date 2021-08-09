import React from 'react';

function Gif(props) {
    return (
        <div className="justify-start w-3/12 p-3">
            <img src={props.url} title={props.title} className="rounded-lg " alt={props.title}/>
            <p data-testid="gif_title" className="text-sm mt-2 mb-2">{props.title}</p>
        </div>
    );
}

export default Gif;