import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsSubTabsMenu = createContext();

export const NewsSubTabsMenuProvider = (props) => {
    const [data, setData] = useState();
    const mySubTab = sessionStorage.getItem('mySubTab');
    const myNewsSession = sessionStorage.getItem('newsSession');

    useEffect(async () => {
        myNewsSession === "business" 
        ?
        await axios.get(`https://newsapi.org/v2/top-headlines?country=${mySubTab}&category=business&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.data ? setData(response.data) : console.log("Invalid") )
        .catch((error) => document.write(`<center><h3>${error}</h3></center>`))
        :   
        await axios.get(`https://newsapi.org/v2/top-headlines?category=${myNewsSession ? myNewsSession : "technology"}&q=+${mySubTab ? mySubTab : "indonesia"}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.data ? setData(response.data) : console.log("Invalid") )
        .catch((error) => document.write(`<center><h3>${error}</h3></center>`));
    }, []);


    return (
        <NewsSubTabsMenu.Provider value={{data}}>
            {props.children}
        </NewsSubTabsMenu.Provider>
    );
};