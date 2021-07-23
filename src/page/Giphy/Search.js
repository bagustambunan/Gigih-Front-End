import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm';
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

    async function handleSubmit() {
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

        <SearchForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
        
        {(data_img) && (
            <div className="bg-gray-100 p-8 rounded-lg mt-5 flex flex-wrap">
                {data_img.map((item) => {
                    return (
                        <Gif
                            key={item.id}
                            url={item.images.original.url}
                            title={item.title}
                        />
                    );
                })}
            </div>
        )}

        </>
    );
}

export default Search;