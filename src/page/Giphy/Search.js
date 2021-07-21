import React, { useState } from 'react';
import Gif from '../../components/Gif';

const axios = require('axios');
const giphy_key = process.env.REACT_APP_GIPHY_KEY;

function Search() {

    const [data_img, set_data_img] = useState(null);
    const [url_giphy, set_url_giphy] = useState("");

    function handleChange(event) {
        let q = event.target.value;
        let url_new = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=${q}&limit=12&offset=0&rating=g&lang=en`;
        set_url_giphy(url_new);
    }

    async function handleClick() {
        try {
            set_data_img(null);
            await axios.get(url_giphy)
            .then(res => {
                set_data_img(res.data.data);
            })
        } catch (err) {
            console.error(err);
        }
    }
        
    return (
        <>

        <div className="">
            <input onChange={(event) => {handleChange(event)}} type="text" className="bg-gray-200 px-4 py-3 rounded-bl-lg rounded-tl-lg w-11/12" placeholder="Type anything..."></input>
            <button onClick={() => {handleClick()}} className="bg-yellow-400 text-white px-4 py-3 rounded-br-lg rounded-tr-lg font-bold w-1/12 hover:bg-yellow-500"><i className="fa fa-search"></i></button>
        </div>
        
        {(data_img) && (
            <div className="bg-gray-100 p-8 rounded-lg mt-5 flex flex-wrap">
                {data_img.map((item) => {
                    return (
                        <Gif url={item.images.original.url} title={item.title}/>
                    );
                })}
            </div>
        )}

        </>
    );
}

export default Search;