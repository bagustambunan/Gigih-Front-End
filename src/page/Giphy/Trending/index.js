import React, {useState,useEffect} from 'react';
import Gif from '../../../components/Gif';

function Trending() {

    const axios = require('axios');
    const giphy_key = process.env.REACT_APP_GIPHY_KEY;
    const [data_img, set_data_img] = useState(null);

    async function getTrending() {
        try {
            set_data_img(null);
            let url = `https://api.giphy.com/v1/gifs/trending?api_key=${giphy_key}`;
            await axios.get(url)
            .then(res => {
                set_data_img(res.data.data);
            })
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getTrending();
    }, []);
    
    return (
        <>
        
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

export default Trending;