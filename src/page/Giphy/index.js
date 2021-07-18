import React from 'react';
import Home from './Home';
import Search from './Search';

class GiphyPage extends React.Component {

    render() {
        return (
            <>
                <Home/>
                <Search/>
            </>
        );
    }
}

export default GiphyPage;