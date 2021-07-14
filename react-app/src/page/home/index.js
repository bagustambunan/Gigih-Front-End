import React from 'react';
import Form from '../../components/Form';
import Gif from '../../components/Gif';

class Search extends React.Component {
    render() {
        const gif = {
            id: '4HrBfVJJveBNS9ytSk',
            title: 'Nintendo Plotting GIF by Gaming GIFs',
            uploadedDate: '2018-04-03 15:21:50',
            url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
            webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
        }
        
        return (
            <div className="container px-10 py-5 grid justify-center">
                <div className="bg-gray-100 px-20 py-10">
                    <Form/>
                    <Gif url={gif.url} title={gif.title}/>
                </div>
            </div>
        );
    }
}

export default Search;