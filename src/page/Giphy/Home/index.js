import React from 'react';
import Gif from '../../../components/Gif';
import data from '../../../data/gifs';

function Home() {

    const filtered_data = data.filter( item => {
        return item.rating === "g";
    });
    
    return (
        <>
        
        <div className="bg-gray-100 p-8 rounded-lg flex flex-wrap">
            {filtered_data.map((item) => {
                return (
                    <Gif
                        key={item.id}
                        url={item.url}
                        title={item.title}
                    />
                );
            })}
        </div>

        </>
    );
}

export default Home;