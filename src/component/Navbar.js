import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import Fade from 'react-reveal';
import Flash from 'react-reveal/Flash';
import BreadCrumb from './BreadCrumb';
import ActaDuirna from '../img/acta-diurna-ic.png';

export default function Navbar() {
    const [category, setCategory] = useState("");

    function getNavbar(e){
        sessionStorage.setItem('newsSession', e.target.innerHTML.toLowerCase());
        sessionStorage.removeItem("mySubTab");
        sessionStorage.removeItem("myToggleTab");
        
        return e.target.innerHTML.toLowerCase();
    }

    return (
        <Fade top>
            <nav className="navbar navbar-expand-xs navbar-light bg-light container-fluid mb-2">
                <Flash>
                    <Link to="/category" className="text-danger" onClick={() => {
                        sessionStorage.removeItem("newsSession");
                        sessionStorage.removeItem("mySubTab");
                        sessionStorage.removeItem("myToggleTab");
                        return setCategory("category");
                    }}>
                        <img src={ActaDuirna} alt="Acta diurna" width="35"/>
                        <strong className="span text-danger">
                            Acta 
                            <span className="text-dark"> Diurna 21<sup>st</sup>
                            </span>
                        </strong>
                    </Link>
                </Flash>
                <button className="navbar-toggler offset-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <br />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav offset-4">
                        <li className="nav-item p-2">
                            <i className="far fa-microchip technology"><a onClick={getNavbar} className="ml-1 p-2" href="/">Technology</a></i>
                        </li>
                        <li className="nav-item p-2">
                            <i className="fas fa-clinic-medical health"><a onClick={getNavbar} className="ml-1 p-2" href="/health">Health</a></i>
                        </li>
                        <li className="nav-item p-2">
                            <i className="fas fa-building business"><a onClick={getNavbar} className="ml-1 p-2" href="/business">Business</a></i>
                        </li>
                        <li className="nav-item p-2">
                            <i className="fas fa-gamepad entertainment"><a onClick={getNavbar} className="ml-1 p-2" href="/entertainment">Entertainment</a></i>
                        </li>
                        <li className="nav-item p-2">
                            <i className="fas fa-comments general"><a onClick={getNavbar} className="ml-1 p-2" href="/general">General</a></i>
                        </li>
                        <li className="nav-item p-2">
                            <i className="fas fa-brain science"><a onClick={getNavbar} className="ml-1 p-2" href="/science">Science</a></i>
                        </li>
                        <li className="nav-item p-2">
                            <i className="fas fa-volleyball-ball sport"><a onClick={getNavbar} className="ml-1 p-2" href="/sport">Sports</a></i>
                        </li>
                    </ul>
                </div>
            </nav>
            <BreadCrumb category={category} />
        </Fade>
    )
}
