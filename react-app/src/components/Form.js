import React from 'react';

const Form = () => {
    return (
        <div className="items-stretch">
            <input type="text" name="q" className="bg-gray-200 px-4 py-3 rounded-lg w-10/12" placeholder="Type anything..."></input>
            <button className="bg-yellow-400 text-white px-4 py-3 rounded-lg font-bold w-2/12 hover:bg-yellow-500">Search</button>
        </div>
    );
}

export default Form;