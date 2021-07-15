import React from 'react';

const Gif = props => {
    return (
        <div className="justify-start bg-white w-4/12 p-3 border">
            <img src={props.url} title={props.title} className="rounded-lg "/>
            <p className="text-sm mt-2 mb-2">{props.title}</p>
        </div>
    );
}

export default Gif;