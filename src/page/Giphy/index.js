import React, { useState } from 'react';
import Home from './Home';
import Search from './Search';

function GiphyPage() {

    const [view, set_view] = useState("home");
    const menu = [
    {
        name: "home",
        text: "Home",
        page: <Home/>
    },
    {
        name: "search",
        text: "Search",
        page: <Search/>
    }
    ]

    const Page = () => {
        const selected_page = menu.filter(item => item.name === view);
        return selected_page[0].page;
    }

    return (
        <center className="p-5 ">
            <div className="w-10/12">

                <div className="w-full mt-5 mb-5 text-left">
                    { menu.map((item) => {
                    return (
                        <a className={`mr-3 text-2xl font-bold mb-5 cursor-pointer ${view===item.name ? "text-gray-600" : "text-gray-300 hover:text-yellow-400"}`}
                        onClick={() => {set_view(item.name)}} >{item.text}</a>
                    );
                    })}
                </div>

                <Page/>

            </div>
        </center>
    );
}

export default GiphyPage;