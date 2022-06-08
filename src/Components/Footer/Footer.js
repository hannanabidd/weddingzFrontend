import React from "react";
import { Link } from "react-router-dom";
import './footer.css';


function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="f-logo">
                            <span className="bubble-span">W</span>eddingz 
                        </h4>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/vendors">
                            <h6 className="footer-links">
                                Vendors
                            </h6>
                        </Link>
                        <Link to="/venues">
                            <h6 className="footer-links">
                                Venues
                            </h6>
                        </Link>
                        <Link to="/catering">
                            <h6 className="footer-links">
                                Catering
                            </h6>
                        </Link>
                        <Link to="/bridal-wear">
                            <h6 className="footer-links">
                                Bridal Wears
                            </h6>
                        </Link>
                        <Link to="/groom-wear">
                            <h6 className="footer-links">
                                Groom Wear
                            </h6>
                        </Link>
                        <Link to="/decor">
                            <h6 className="footer-links">
                                Decors
                            </h6>
                        </Link>
                    </div>


                    <div className="col-lg-4">
                        <Link to="/photographers">
                            <h6 className="footer-links">
                                Photographers
                            </h6>
                        </Link>
                        <Link to="/gallery">
                            <h6 className="footer-links">
                                Gallery
                            </h6>
                        </Link>
                        <Link to="/compare">
                            <h6 className="footer-links">
                                Compare
                            </h6>
                        </Link>
                        <Link to="/blogs">
                            <h6 className="footer-links">
                                Blogs
                            </h6>
                        </Link>
                        <Link to="/honeymoon">
                            <h6 className="footer-links">
                                Honeymoons
                            </h6>
                        </Link>
                        <Link to="/cost-calculator">
                            <h6 className="footer-links">
                                Cost Calculator
                            </h6>
                        </Link>
                    </div>


                    <div className="col-lg-4 footer-flex">
                        <Link to="/privacy-policy">
                            <h6 className="footer-links">
                                Privacy Policy
                            </h6>
                        </Link>
                        <Link to="/tos">
                            <h6 className="footer-links">
                                Terms and Conditions
                            </h6>
                        </Link>
                        <div className="footer-logos-box">
                            <a href="https://facebook.com">
                                <div className="footer-circle flex-vh-center">
                                    <img className='footer-logo' src={process.env.PUBLIC_URL + `/home/facebook.svg`} alt="" />
                                </div>
                            </a>
                            <a href="https://twitter.com">
                                <div className="footer-circle flex-vh-center">
                                    <img className='footer-logo' src={process.env.PUBLIC_URL + `/home/twitter.svg`} alt="" />
                                </div>
                            </a>
                            <a href="https://instagram.com">
                                <div className="footer-circle flex-vh-center">
                                    <img className='footer-logo' src={process.env.PUBLIC_URL + `/home/instagram.svg`} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>


                </div>
                <div className="footer-line"></div>
                <div className="row">
                    <div className="col-12">
                        <p className="all-rights-reserved">
                            All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;