import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <footer className="main-footer bg-color-2">
                <div className="footer-top">
                    <div className="vector-bg" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><a href="index.html"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
                                    <div className="text">
                                        <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><a href="index.html">About Us</a></li>
                                            <li><a href="index.html">Listing</a></li>
                                            <li><a href="index.html">How It Works</a></li>
                                            <li><a href="index.html">Our Services</a></li>
                                            <li><a href="index.html">Our Blog</a></li>
                                            <li><a href="index.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget gallery-widget">
                                    <div className="widget-title">
                                        <h3>Gallery</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="image-list clearfix">
                                            <li><figure className="image-box"><a href="gallery-1.html"><img src="assets/images/resource/footer-gallery-1.jpg" alt="" /></a></figure></li>
                                            <li><figure className="image-box"><a href="gallery-1.html"><img src="assets/images/resource/footer-gallery-2.jpg" alt="" /></a></figure></li>
                                            <li><figure className="image-box"><a href="gallery-1.html"><img src="assets/images/resource/footer-gallery-3.jpg" alt="" /></a></figure></li>
                                            <li><figure className="image-box"><a href="gallery-1.html"><img src="assets/images/resource/footer-gallery-4.jpg" alt="" /></a></figure></li>
                                            <li><figure className="image-box"><a href="gallery-1.html"><img src="assets/images/resource/footer-gallery-5.jpg" alt="" /></a></figure></li>
                                            <li><figure className="image-box"><a href="gallery-1.html"><img src="assets/images/resource/footer-gallery-6.jpg" alt="" /></a></figure></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h3>Contacts</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="info-list clearfix">
                                            <li><i className="fas fa-map-marker-alt"></i>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</li>
                                            <li><i className="fas fa-microphone"></i><a href="tel:23055873407">+2(305) 587-3407</a></li>
                                            <li><i className="fas fa-envelope"></i><a href="mailto:info@example.com">info@example.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner clearfix">
                            <div className="copyright pull-left">
                                <p><a href="index.html">Travio</a> &copy; 2021 All Right Reserved</p>
                            </div>
                            <ul className="footer-nav pull-right">
                                <li><a href="index.html">Terms of Service</a></li>
                                <li><a href="index.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Header;
