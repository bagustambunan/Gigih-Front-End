import React, { useState, useEffect } from 'react';
import SearchForm from '../../../components/SearchForm';
import Gif from '../../../components/Gif';

import { useSelector } from 'react-redux';
import {
    selectQuery,
  } from '../../../redux/querySlice';

function Search() {

    const axios = require('axios');
    const giphy_key = process.env.REACT_APP_GIPHY_KEY;

    const [data_img, set_data_img] = useState(null);
    const query = useSelector(selectQuery);

    async function doSearch() {
        try {
            set_data_img(null);
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=${query}&limit=12&offset=0&rating=g&lang=en`;
            await axios.get(url)
            .then(res => {
                set_data_img(res.data.data);
            })
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        doSearch();
    }, [query]);
        
    return (
        <>

        <SearchForm/>
        
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