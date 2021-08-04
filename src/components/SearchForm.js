import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateQuery,
    selectQuery,
  } from '../redux/querySlice';

function SearchForm() {

    const query = useSelector(selectQuery);
    const dispatch = useDispatch();
    const [val_q, set_val_q] = useState(query);

    function handleChange(event){
        set_val_q(event.target.value);
    }

    function handleSubmit(){
        dispatch(updateQuery(val_q));
    }

    return (
        <div className="">
            <input onChange={(event) => {handleChange(event)}} value={val_q} type="text" className="bg-gray-200 px-4 py-3 rounded-bl-lg rounded-tl-lg w-11/12" placeholder="Type anything..."></input>
            <button onClick={() => {handleSubmit()}} className="bg-yellow-400 text-white px-4 py-3 rounded-br-lg rounded-tr-lg font-bold w-1/12 hover:bg-yellow-500"><i className="fa fa-search"></i></button>
        </div>
    );
}

export default SearchForm;