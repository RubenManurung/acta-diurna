import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const myNewsSession = sessionStorage.getItem('newsSession');
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = year + "-" + month + "-" + day;

    

    useEffect(async () => {
        await axios.get(`https://newsapi.org/v2/everything?q=${myNewsSession ? myNewsSession : "technology"}&from=${newdate}&to=${newdate}&sortBy=popularity&language=en&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.data ? setData(response.data) : document.write("Data is empty"))
        .catch((error) => document.write(`<center><h3>${error}</h3></center>`));
    }, []);

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};