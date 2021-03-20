import React from 'react';
import Fade from 'react-reveal';

export default function Footer() {
    let dateObj = new Date();

    function getNavbar(e){
        sessionStorage.setItem('newsSession', e.target.innerHTML.toLowerCase());
        sessionStorage.removeItem("mySubTab");
        sessionStorage.removeItem("myToggleTab");
        
        return e.target.innerHTML.toLowerCase();
    }


    return (
        <Fade left>
            <div className="d-flex justify-content-center">
                <footer className="footer mt-2">
                        <div className="d-flex justify-content-left">
                            <div className="col-6 text-left">
                                <ul className="list-unstyled ml-4 mt-2" style={{lineHeight: "2rem"}}>
                                    <p className="h5">Category News</p> 
                                    <li>
                                        <a onClick={getNavbar} className="text-white" href="/">Technology</a>
                                    </li>
                                        <a onClick={getNavbar} className="text-white" href="/health">Health</a>
                                    <li>
                                        
                                    </li>
                                        <a onClick={getNavbar} className="text-white" href="/business">Business</a>
                                    <li>

                                    </li>
                                        <a onClick={getNavbar} className="text-white" href="/entertainment">Entertainment</a>
                                    <li>

                                    </li>
                                        <a onClick={getNavbar} className="text-white" href="/general">General</a>
                                    <li>

                                    </li>
                                        <a onClick={getNavbar} className="text-white" href="/science">Science</a>
                                    <li>

                                    </li>
                                        <a onClick={getNavbar} className="text-white" href="/sport">Sports</a>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-6">
                                <ul className="list-unstyled m-2" style={{marginLeft: "50px", lineHeight: "5rem", cursor: "pointer"}} >
                                <p className="h5">Social Media</p> 
                                    <li>
                                        <i className="fab fa-instagram fa-3x"></i>
                                    </li>
                                    <li>
                                        <i className="fab fa-facebook fa-3x"></i>
                                    </li>
                                    <li>
                                        <i className="fab fa-twitter fa-3x"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>© {dateObj.getUTCFullYear()} By<strong onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="span ml-2 text-danger" style={{cursor: "pointer"}}>Acta <span className="text-dark">Diurna 21<sup>st</sup></span></strong></p>
                </footer>
            </div>
        </Fade>
    )
}
