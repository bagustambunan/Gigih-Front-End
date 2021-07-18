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
            <center className="p-5">
                <div className="w-full object-center">

                    <div className="mt-5">
                        <h1 className="text-2xl font-bold mb-5 self-start text-gray-600">Home</h1>
                    </div>
                    
                    <div className="bg-gray-100 p-8 rounded-lg mt-5 flex">
                        {filtered_data.map((item) => {
                            return (
                                <Gif key={item.id} url={item.url} title={item.title}/>
                            );
                        })}
                    </div>

                </div>
            </center>
        );
    }
}

export default Home;