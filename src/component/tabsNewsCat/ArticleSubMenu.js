import React from 'react';
import Fade from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';

function ArticleSubMenu(props) {
    let {data} = props;
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
        <Fade top>
            <div className="d-flex justify-content-center m-3" style={{width: "70%"}}>
                <div className="card text-center" style={{display: data.urlToImage ? "" : 'none'}}>
                    <RubberBand>
                        <small className="text-danger" style={{position: "fixed", zIndex: "999"}}>
                            {data.source.id ? "" : <span className="mark float-right"><b><i className="fas fa-tags"></i> Hot News</b></span>}
                        </small>
                    </RubberBand>
                    <img src={data.urlToImage} className="news-img border-rad" alt={data.title ? data.title : "News"}/>
                    <div className="card-body">
                        <h5 className="card-title-news">
                            <a className="text-light" href={data.url}>
                                {data.title}
                            </a>
                        </h5>
                        <hr />
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
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default ArticleSubMenu
