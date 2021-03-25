import React from 'react';
import Business from '../img/business-img.jpg';
import Entertainment from '../img/entertainment.jpg';
import Science from '../img/science.jpg';
import Sports from '../img/sports.jpg';
import Technology from '../img/technology-img.jpg';
import General from '../img/general-img.jpg';
import Health from '../img/health-img.jpg';
import '../style.css';

export default function NewsCategory() {
    const arrCat2 = {
        "Technology" : {
            "/technology" : Technology
        },
        "Sports" : {
            '/sport' : Sports
        },
        "Entertainment" : {
            "/entertainment" : Entertainment
        },
        "Health" : {
            "/health" : Health
        },
        "Business" : {
            "/business" : Business
        },
        "General" : {
            "/general" : General
        },
        "Science" : {
            "/science" : Science
        }
    }

    function getNavbar(e){
        sessionStorage.setItem('newsSession', e.target.innerHTML.toLowerCase());
        sessionStorage.removeItem("mySubTab");
        sessionStorage.removeItem("myToggleTab");
        return e.target.innerHTML.toLowerCase();
    }


    return (
        <>
            <h3 className="d-flex justify-content-center">News Category</h3>
            {Object.entries(arrCat2).map(([k,v]) => 
                    
                Object.entries(v).map((([key, val]) => 
                    <div key={k} className="d-flex justify-content-center">
                        <div className="card parent">
                            <img className="card-img child" src={val} alt="Category" />
                            <div className="card-img-overlay">
                                <a onClick={getNavbar} href={key} className="cat-name">{k}</a>
                            </div>
                        </div>
                    </div>
                )))
            }                        
        </>
    )
}
