import React from 'react';
import Gif from '../../components/Gif';
import data from '../../data/gifs';

class Home extends React.Component {

    render() {

        const filtered_data = data.filter( item => {
            return item.rating === "g";
        });
        console.log(filtered_data);
        
        return (
            <>
            
            <div className="bg-gray-100 p-8 rounded-lg flex">
                {filtered_data.map((item) => {
                    return (
                        <Gif key={item.id} url={item.url} title={item.title}/>
                    );
                })}
            </div>

            </>
        );
    }
}

export default Home;