import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsSubTabsMenu = createContext();

export const NewsSubTabsMenuProvider = (props) => {
    const [data, setData] = useState();
    // const apiKey = "32c9e60e573441b69a6c4da41ebd6fd0"; //1st account
    const apiKey = "f10d00caae2a4260980971293dc09ef6"; //2nd account   
    // const apiKey = "2b476b42e5cd439caaf74722a69b993d"; //3nd account   
    // const apiKey = "f4c8617ef03d45a49262e2f794a7a947"; //4nd account   
    const mySubTab = sessionStorage.getItem('mySubTab');
    const myNewsSession = sessionStorage.getItem('newsSession');

    useEffect(() => {
        myNewsSession === "business" 
        ?
        axios.get(`https://newsapi.org/v2/top-headlines?country=${mySubTab}&category=business&apiKey=${apiKey}`)
        .then((response) => response.data ? setData(response.data) : console.log("Invalid") )
        .catch((error) => document.write(`<center><h3>${error}</h3></center>`))
        :   
        axios.get(`https://newsapi.org/v2/top-headlines?category=${myNewsSession ? myNewsSession : "technology"}&q=+${mySubTab ? mySubTab : "indonesia"}&apiKey=${apiKey}`)
        .then((response) => response.data ? setData(response.data) : console.log("Invalid") )
        .catch((error) => document.write(`<center><h3>${error}</h3></center>`));
    }, []);


    return (
        <NewsSubTabsMenu.Provider value={{data}}>
            {props.children}
        </NewsSubTabsMenu.Provider>
    );
};