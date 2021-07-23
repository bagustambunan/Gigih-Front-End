import React from 'react';

function SearchForm(props) {
    return (
        <div className="">
            <input onChange={(event) => {props.handleChange(event)}} type="text" className="bg-gray-200 px-4 py-3 rounded-bl-lg rounded-tl-lg w-11/12" placeholder="Type anything..."></input>
            <button onClick={() => {props.handleSubmit()}} className="bg-yellow-400 text-white px-4 py-3 rounded-br-lg rounded-tr-lg font-bold w-1/12 hover:bg-yellow-500"><i className="fa fa-search"></i></button>
        </div>
    );
}

export default SearchForm;