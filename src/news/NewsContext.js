import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    // const apiKey = "32c9e60e573441b69a6c4da41ebd6fd0"; //1st account
    const apiKey = "f10d00caae2a4260980971293dc09ef6"; //2nd account
    // const apiKey = "2b476b42e5cd439caaf74722a69b993d"; //3nd account   
    // const apiKey = "f4c8617ef03d45a49262e2f794a7a947"; //4nd account 
    const myNewsSession = sessionStorage.getItem('newsSession');
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = year + "-" + month + "-" + day;

    

    useEffect(async () => {
        await axios.get(`https://newsapi.org/v2/everything?q=${myNewsSession ? myNewsSession : "technology"}&from=${newdate}&to=${newdate}&sortBy=popularity&language=en&apiKey=${apiKey}`)
        .then((response) => response.data ? setData(response.data) : document.write("Data is empty"))
        .catch((error) => document.write(`<center><h3>${error}</h3></center>`));
    }, []);

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};