import React, { useState } from 'react';
import Home from './Home';
import Search from './Search';

const GiphyPage = () => {

    const [view, setView] = useState("home");

    const Page = () => {
        switch(view){
            case "home":
                return <Home/>;
                break;
            case "search":
                return <Search/>;
                break;
            default:
                return <Home/>;
        }
        // return view=="home" ? <Home/> : <Search/>;
    }

    return (
        <center className="p-5">
            <div className="w-11/12 object-center">

                <div className="mt-5 mb-5">
                    <a className={`text-2xl font-bold mb-5 cursor-pointer ${view=="home" ? "text-gray-600" : "text-gray-300 hover:text-yellow-400"}`}
                        onClick={() => {setView("home")}} >Home</a>
                    <a className={`ml-3 text-2xl font-bold mb-5 cursor-pointer ${view=="search" ? "text-gray-600" : "text-gray-300 hover:text-yellow-400"}`}
                        onClick={() => {setView("search")}} >Search</a>
                </div>

                <Page/>

            </div>
        </center>
    );
}

export default GiphyPage;