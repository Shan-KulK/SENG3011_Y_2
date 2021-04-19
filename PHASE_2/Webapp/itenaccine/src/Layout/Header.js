import React, { Component } from 'react';
import AuthNav from './authNav'

class Header extends Component {
    render() {
        return (
            <header className="main-header style-one">
                {/* <!-- header-lower --> */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">

                                {/* Make Canary Logo */}
                                <figure className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" /></a></figure>


                                
                            </div>
                            <div className="menu-area clearfix">
                                {/* <!--Mobile Navigation Toggler--> */}
                                <div className="mobile-nav-toggler">
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown"><a href="index.html">Home</a>
                                                <ul>
                                                    <li><a href="index.html">Home Page 01</a></li>
                                                    <li><a href="index-2.html">Home Page 02</a></li>
                                                    <li><a href="index-3.html">Home Page 03</a></li>
                                                    <li><a href="index-4.html">Home Page 04</a></li>
                                                    <li><a href="index-5.html">Home Page 05</a></li>
                                                    <li><a href="index-onepage.html">OnePage Home</a></li>
                                                    <li><a href="index-rtl.html">RTL Home</a></li>
                                                    <li className="dropdown"><a href="index.html">Header Style</a>
                                                        <ul>
                                                            <li><a href="index.html">Header Style 01</a></li>
                                                            <li><a href="index-2.html">Header Style 02</a></li>
                                                            <li><a href="index-3.html">Header Style 03</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="index.html">Destinations</a>
                                                <ul>
                                                    <li><a href="destination.html">Destinations 01</a></li>
                                                    <li><a href="destination-2.html">Destinations 02</a></li>
                                                    <li><a href="destination-details.html">Destination Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="index.html">Tours</a>
                                                <ul>
                                                    <li><a href="tour-1.html">Tours Grid</a></li>
                                                    <li><a href="tour-2.html">Tours List</a></li>
                                                    <li><a href="tour-details.html">Tour Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="index.html">Pages</a>
                                                <ul>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="booking-1.html">Booking Process</a></li>
                                                    <li><a href="tour-deals.html">Tour Deals</a></li>
                                                    <li><a href="tour-guide.html">Tour Guide</a></li>
                                                    <li><a href="gallery-1.html">Gallery 01</a></li>
                                                    <li><a href="gallery-2.html">Gallery 02</a></li>
                                                    <li><a href="faq.html">Faq's</a></li>
                                                    <li><a href="signup.html">Sign Up</a></li>
                                                    <li><a href="login.html">Sign In</a></li>
                                                    <li><a href="error.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="index.html">Elements</a>
                                                <div className="megamenu">
                                                    <div className="row clearfix">
                                                        <div className="col-xl-6 column">
                                                            <ul>
                                                                <li><h4>Elements 1</h4></li>
                                                                <li><a href="about-element-1.html">About Block 01</a></li>
                                                                <li><a href="about-element-2.html">About Block 02</a></li>
                                                                <li><a href="about-element-3.html">About Block 03</a></li>
                                                                <li><a href="feature-element-1.html">Feature Block 01</a></li>
                                                                <li><a href="feature-element-2.html">Feature Block 02</a></li>
                                                                <li><a href="tour-element-1.html">Tour Block 01</a></li>
                                                                <li><a href="tour-element-2.html">Tour Block 02</a></li>
                                                                <li><a href="place-element-1.html">Place Block 01</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-6 column">
                                                            <ul>
                                                                <li><h4>Elements 2</h4></li>
                                                                <li><a href="place-element-2.html">Place Block 02</a></li>
                                                                <li><a href="news-element-1.html">News Block 01</a></li>
                                                                <li><a href="news-element-2.html">News Block 02</a></li>
                                                                <li><a href="team-element-1.html">Team Block 01</a></li>
                                                                <li><a href="team-element-2.html">Team Block 02</a></li>
                                                                <li><a href="video-element.html">Video Block</a></li>
                                                                <li><a href="funfact-element.html">Funfact Block</a></li>
                                                                <li><a href="testimonial-element.html">Testimonial Block</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown"><a href="index.html">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog Grid</a></li>
                                                    <li><a href="blog-2.html">Blog Standard</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <ul className="menu-right-content clearfix">
                                <li className="search-box-outer">
                                    <div className="dropdown">
                                        <button className="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-search"></i></button>
                                        <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                                            <div className="form-container">
                                                <form method="post" action="blog.html">
                                                    <div className="form-group">
                                                        <input type="search" name="search-field" value="" placeholder="Search...." required="" />
                                                        <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-link">
                                    {/* <a href="signup.html"><i className="icon-Profile"></i></a> */}
                                    <AuthNav />
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!--sticky Header--> */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" /></a></figure>
                            </div>
                            <div className="menu-area">
                                <nav className="main-menu clearfix">
                                    {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                                </nav>
                            </div>
                            <ul className="menu-right-content clearfix">
                                <li className="search-box-outer">
                                    <div className="dropdown">
                                        <button className="search-box-btn" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-search"></i></button>
                                        <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu4">
                                            <div className="form-container">
                                                <form method="post" action="blog.html">
                                                    <div className="form-group">
                                                        <input type="search" name="search-field" value="" placeholder="Search...." required="" />
                                                        <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                <li className="user-link">
                                    {/* <a href="signup.html"><i className="icon-Profile"></i></a> */}
                                    <AuthNav />
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;
