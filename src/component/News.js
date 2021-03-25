import React, {useContext} from 'react';
import { NewsContext} from '../news/NewsContext';
import { BounceLoader } from 'react-spinners';
import Fade from 'react-reveal';
import NewsArticle from './NewsArticle';


function News() {
    const { data } = useContext(NewsContext);
    const myNewsSession = sessionStorage.getItem('newsSession');

    return (
        <>
            <h3 className="d-flex text-dark justify-content-center p-2">{myNewsSession ? myNewsSession.charAt(0).toUpperCase() + myNewsSession.slice(1) : "Technology"}</h3>
            <div className="container">
                {data ? data.articles.map(news => <Fade right><NewsArticle data={news} key={news.url} /></Fade>)
                :
                <div className="row d-flex justify-content-center mt-4">
                    <BounceLoader loading/>
                </div>}
            </div>
        </>
    )
}

export default News;
