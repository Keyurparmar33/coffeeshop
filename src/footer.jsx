import React from "react";
import { FaInstagram, FaFacebookSquare, FaTwitter ,FaVimeoV} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";



const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <div className="footer-top">
                    <div className="request-block">
                        <div className="container">
                            <div className="request-text">
                                <p>Book your Birthday in our Pastry, Contact Us !</p>
                                <a href="#">REQUEST IT NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="bottom-line">
                        <div className="container">
                            <div className="bottom-cols">
                                <div className="first-col">
                                    <div className="bottom-logo">
                                        <img src="/assets/images/logo-white.png" alt="logo" />
                                    </div>
                                    <div className="bottom-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh <br /> condimentum venenatis eu ac magnasin. Quisque interdum est mauris, eget <br /> ullamcorper.</p>
                                    </div>
                                    <div className="bottom-icon">
                                        <ul className="social-icon">
                                            <li><a href="#"><FaFacebookSquare /></a></li>
                                            <li><a href="#"><FaInstagram /></a></li>
                                            <li><a href="#"><FaVimeoV /></a></li>
                                            <li><a href="#"><FaTwitter /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="second-col">
                                    <div className="col-title">
                                        <strong>ABOUT</strong>
                                    </div>
                                    <ul className="bottom-list">
                                        <li><a href="#"><IoIosArrowForward />About us</a></li>
                                        <li><a href="#"><IoIosArrowForward />Service</a></li>
                                        <li><a href="#"><IoIosArrowForward />Testimonial </a></li>
                                        <li><a href="#"><IoIosArrowForward />Faq</a></li>
                                        <li><a href="#"><IoIosArrowForward />payments</a></li>
                                    </ul>
                                </div>
                                <div className="second-col">
                                    <div className="col-title">
                                        <strong>CONTACTS</strong>
                                    </div>
                                    <ul className="bottom-list">
                                        <li><a href="#"><IoIosArrowForward />Contact Us</a></li>
                                        <li><a href="#"><IoIosArrowForward />Book a Table</a></li>
                                        <li><a href="#"><IoIosArrowForward />Cost Calc. </a></li>
                                        <li><a href="#"><IoIosArrowForward />Our Chef</a></li>
                                        <li><a href="#"><IoIosArrowForward />About Us</a></li>
                                    </ul>
                                </div>
                                <div className="second-col">
                                    <div className="col-title">
                                        <strong>PARTNERS</strong>
                                    </div>
                                    <ul className="bottom-list">
                                        <li><a href="#"><IoIosArrowForward />Wedding </a></li>
                                        <li><a href="#"><IoIosArrowForward />Cake Decorator</a></li>
                                        <li><a href="#"><IoIosArrowForward />Restaurant </a></li>
                                        <li><a href="#"><IoIosArrowForward />Coffee Shop</a></li>
                                        <li><a href="#"><IoIosArrowForward />Flowers</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="f-bottom">
                                <hr />
                                <div className="bottomtext">
                                    <p>BAKERY WORDPRESS THEME</p>
                                    <p>COPYRIGHT NICDARK THEMES 2020</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;