import React from 'react';
import '.././style.css';
import Tada from 'react-reveal/Tada';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';

function NewsArticle({data}) {
    let ExplodeUrl = data.url.split(".com");

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    return (
        <>
            <div className="d-flex justify-content-center mt-2">
                <div className="card text-center">
                    <Tada delay={990}>
                        <small className="text-danger">
                            {data.source.id ? "" : <span className="mark float-right"><b><i className="fas fa-tags"></i> Hot News</b></span>}
                        </small>
                    </Tada>
                    <Zoom right delay={300}>
                        <img src={data.urlToImage} className="news-img border-rad" alt={data.title ? data.title : "News"}/>
                    </Zoom>
                    <div className="card-body">
                        <Pulse>
                            <h5 className="card-title-news">
                                <a className="text-light" href={data.url}>
                                    {data.title}
                                </a>
                            </h5>
                        </Pulse>
                        <div className="row">
                            <div className="col-sm-12">
                                <img src={`https://ui-avatars.com/api/?name=${data.author ? data.author : "Annonymous"}&rounded=true&bold=true&color=${getRandomColor()}&background=${getRandomColor()}`} width="30x" height="30" alt={data.title ? data.title : "News"}/>
                            </div>
                            <div className="col-sm-12">
                                <small>
                                    {data.author ? data.author : "Annonymous"}
                                </small>
                                <hr />
                            </div>
                        </div>
                        <p className="card-text">
                            <a className="text-secondary" href={data.url}>
                                {data.description ? data.description : data.content} <b>read more ...</b>
                            </a>
                        </p>
                        <p className="card-text text-info">
                            <a href={ExplodeUrl[0]+".com"}>
                                <span className="ml-1 float-left" style={{color:"#"+getRandomColor()}}>
                                    {data.source.name}
                                </span>
                            </a>
                            <em className="text-secondary float-right" style={{fontSize : "1rem"}}>
                                {
                                    new Date(data.publishedAt).toLocaleDateString("en-US", 
                                    { 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: 'numeric' 
                                    })
                                }
                            </em>
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsArticle;