import React from 'react';
import Gif from '../../components/Gif';

const axios = require('axios');
const giphy_key = process.env.REACT_APP_GIPHY_KEY;

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // url_img: ["https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"],
            data_img: [],
            url_giphy: `https://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=google&limit=3&offset=0&rating=g&lang=en`
        }
    }

    async getImg() {
        try {
            const resp = await axios.get(this.state.url_giphy);
            // console.log(resp.data.data);
            this.setState({
                data_img: resp.data.data,
            });
            console.log(this.state.data_img);
        } catch (err) {
            console.error(err);
        }
    };

    searchGiphy(event) {
        let q = event.target.value;
        let url_new = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=${q}&limit=3&offset=0&rating=g&lang=en`;
        this.setState({
            url_giphy: url_new,
        });
        this.getImg();
    }

    render() {
        
        return (
            <center className="p-5">
                <div className="w-9/12 object-center">

                    <div className="">
                        <input onChange={(event) => {this.searchGiphy(event)}} type="text" name="q" className="bg-gray-200 px-4 py-3 rounded-lg w-full" placeholder="Type anything..."></input>
                        {/* <p>{this.state.url_giphy}</p> */}
                    </div>
                    
                    <div className="bg-gray-100 p-8 rounded-lg mt-5 flex">
                    {this.state.data_img.map((item) => {
                        return (
                            <Gif url={item.images.original.url} title={item.title}/>
                        );
                    })}

                    </div>

                </div>
            </center>
        );
    }
}

export default Search;