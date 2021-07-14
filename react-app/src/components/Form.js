import React from 'react';

const Form = () => {
    return (
        <div>
            <input type="text" name="q" className="bg-white px-4 py-2 mr-2 rounded-lg" placeholder="Type text"></input>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg">Search</button>
        </div>
    );
}

export default Form;