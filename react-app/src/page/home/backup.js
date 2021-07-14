import React from 'react';
const axios = require('axios');

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url_img: "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif",
            url_giphy: ""
        }
    }

    getImg() {
        try {
        const response = axios.get(this.state.url_giphy);
        console.log(response);
        } catch (error) {
        console.error(error);
        }
    }

    searchGiphy() {
        const giphy_key = process.env.REACT_APP_GIPHY_KEY;
        let q = "love";
        let url_new = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=${q}&limit=1&offset=0&rating=g&lang=en`;
        this.setState({
            url_giphy: url_new,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" name="q"></input>
                    <input type="submit" onClick={() => {this.searchGiphy()}}></input>
                </div>
                <div>
                    <img src={this.state.url_img} alt="Running GIF"/>
                </div>
            </div>
        );
    }
}

export default Search;