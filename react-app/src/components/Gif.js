import React from 'react';

const Gif = props => {
    return (
        <div>
            <h2 className="text-lg mt-2 mb-2 font-bold">{props.title}</h2>
            <img src={props.url} title={props.title} className="rounded-lg"/>
        </div>
    );
}

export default Gif;