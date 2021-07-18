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
            url_giphy: ''
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
        let url_new = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=${q}&limit=5&offset=0&rating=g&lang=en`;
        this.setState({
            url_giphy: url_new,
        });
        // this.getImg();
    }

    render() {
        
        return (
            <>

            <div className="">
                <input onChange={(event) => {this.searchGiphy(event)}} type="text" name="q" className="bg-gray-200 px-4 py-3 rounded-bl-lg rounded-tl-lg w-11/12" placeholder="Type anything..."></input>
                {/* <p>{this.state.url_giphy}</p> */}
                <button onClick={() => {this.getImg()}} className="bg-yellow-400 text-white px-4 py-3 rounded-br-lg rounded-tr-lg font-bold w-1/12 hover:bg-yellow-500"><i className="fa fa-search"></i></button>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg mt-5 flex flex-wrap">
                {this.state.data_img.map((item) => {
                    return (
                        <Gif url={item.images.original.url} title={item.title}/>
                    );
                })}
            </div>

            </>
        );
    }
}

export default Search;