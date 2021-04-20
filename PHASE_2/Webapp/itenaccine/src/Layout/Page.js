import React, { Component } from 'react';
// import Footer from './Footer';
// import Header from './Header';
import Navbar from '../Components/Navbar';


class Page extends Component{
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <>
                <div className="boxed_wrapper">


                    {/* <!-- preloader --> */}
                    <div className="loader-wrap">
                        <div className="preloader">
                            <div className="preloader-close">Preloader Close</div>
                            <div id="handle-preloader" className="handle-preloader">
                                <div className="animation-preloader">
                                    <div className="spinner"></div>
                                    <div className="txt-loading">
                                        <span data-text-preloader="C" className="letters-loading">
                                            C
                                        </span>
                                        <span data-text-preloader="a" className="letters-loading">
                                            a
                                        </span>
                                        <span data-text-preloader="n" className="letters-loading">
                                            n
                                        </span>
                                        <span data-text-preloader="a" className="letters-loading">
                                            a
                                        </span>
                                        <span data-text-preloader="r" className="letters-loading">
                                            r
                                        </span>
                                        <span data-text-preloader="y" className="letters-loading">
                                            y
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Navbar />
                    {/* <Header /> */}
                    <div className="mobile-menu">
                        <div className="menu-backdrop"></div>
                        <div className="close-btn"><i className="fas fa-times"></i></div>

                        <nav className="menu-box">
                            <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="" title="" /></a></div>
                            <div className="menu-outer">
                                {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div> */}
                                <div className="contact-info">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li>Chicago 12, Melborne City, USA</li>
                                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                                    </ul>
                                </div>
                                <div className="social-links">
                                    <ul className="clearfix">
                                        <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
                                        <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
                                        <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
                                        <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
                                        <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {this.props.children}

                    {/* <Footer /> */}
                    <button className="scroll-top scroll-to-target" data-target="html">
                        <span className="fal fa-angle-up"></span>
                    </button>
                </div>
            </>
        )
    }
}

export default Page;
