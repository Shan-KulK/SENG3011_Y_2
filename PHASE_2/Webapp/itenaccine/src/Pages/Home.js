import React, { Component } from 'react';


class Home extends Component {
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
                    {/* <!-- preloader end --> */}


                    {/* <!-- main header --> */}
                    <header className="main-header style-one">
                        {/* <!-- header-lower --> */}
                        <div className="header-lower">
                            <div className="auto-container">
                                <div className="outer-box">
                                    <div className="logo-box">
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
                                            <a href="signup.html"><i className="icon-Profile"></i></a>
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
                                            <a href="signup.html"><i className="icon-Profile"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* <!-- main-header end --> */}

                    {/* <!-- Mobile Menu  --> */}
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
                        {/* <!-- End Mobile Menu --> */}


                        {/* <!-- banner-section --> */}
                        <section className="banner-section" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}>
                            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h2>Explore <br />Your Travel</h2>
                                    <p>Discover your next great adventure, become an explorer to get started!</p>
                                    <div className="form-inner">
                                        <form action="index.html" method="post" className="booking-form clearfix">
                                            <div className="form-group">
                                                <input type="text" name="service" placeholder="Where to?" required="" />
                                            </div>
                                            <div className="form-group input-date">
                                                <i className="far fa-angle-down"></i>
                                                <input type="text" name="date" placeholder="When?" id="datepicker" />
                                            </div>
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="wide">
                                                        <option data-display="Travel Type">Travel Type</option>
                                                        <option value="1">Adventure Tours</option>
                                                        <option value="2">City Tours</option>
                                                        <option value="3">Couple Tours</option>
                                                        <option value="4">Group Tours</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="message-btn">
                                                <button type="submit" className="theme-btn"><i className="far fa-search"></i>Find Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- banner-section end --> */}


                        {/* <!-- feature-section --> */}
                        <section className="feature-section centred bg-color-1 sec-pad">
                            <div className="auto-container">
                                <div className="sec-title text-center">
                                    <p>Travio Specials</p>
                                    <h2>Why Travel with Tutive?</h2>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                        <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/feature-1.jpg" alt="" /></figure>
                                                <div className="lower-content">
                                                    <div className="icon-box"><i className="icon-1"></i></div>
                                                    <h4>2000+ Our Worldwide Guides</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                        <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/feature-2.jpg" alt="" /></figure>
                                                <div className="lower-content">
                                                    <div className="icon-box"><i className="icon-2"></i></div>
                                                    <h4>100% Trusted Tour Agency</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                        <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/feature-3.jpg" alt="" /></figure>
                                                <div className="lower-content">
                                                    <div className="icon-box"><i className="icon-3"></i></div>
                                                    <h4>12+ Years of Travel Experience</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                        <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/feature-4.jpg" alt="" /></figure>
                                                <div className="lower-content">
                                                    <div className="icon-box"><i className="icon-4"></i></div>
                                                    <h4>98% of Our Travelers are Happy</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- feature-section end --> */}


                        {/* <!-- about-section --> */}
                        <section className="about-section">
                            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image_block_1">
                                            <div className="image-box">
                                                <div className="shape">
                                                    <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                                                    <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                                </div>
                                                <figure className="image image-1">
                                                    <img src="assets/images/resource/about-1.jpg" alt="" />
                                                    <div className="shape-3" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                                </figure>
                                                <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                                                <div className="video-content">
                                                    <h3>Find Your Best Destination</h3>
                                                    <div className="video-btn">
                                                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><i className="icon-Video"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_1">
                                            <div className="content-box">
                                                <div className="sec-title">
                                                    <p>About Travio</p>
                                                    <h2>World Best Travel Agency Company Since 2008.</h2>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                </div>
                                                <ul className="list clearfix">
                                                    <li>Ratione voluptatem.sequi nesciunt.</li>
                                                    <li>Ratione voluptatem.</li>
                                                    <li>Ratione voluptatem sequi.</li>
                                                </ul>
                                                <div className="btn-box">
                                                    <a href="tour-1.html" className="theme-btn">Find Tours</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="tour-section bg-color-1 sec-pad">
                            <div className="pattern-layer" style= {{backgroundImage: "url(assets/images/shape/shape-4.png)"}}></div>
                            <div className="auto-container">
                                <div className="sec-title text-center">
                                    <p>Modern and Beautiful</p>
                                    <h2>Our Most Popular Adventures</h2>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
                                        <div className="tour-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <img src="assets/images/tour/tour-1.jpg" alt="" />
                                                    <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                </figure>
                                                <div className="lower-content">
                                                    <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                    <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                    <h4>$170.00<span> / Per person</span></h4>
                                                    <ul className="info clearfix">
                                                        <li><i className="far fa-clock"></i>5 Days</li>
                                                        <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                    <div className="btn-box">
                                                        <a href="tour-details.html">See Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
                                        <div className="tour-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <img src="assets/images/tour/tour-2.jpg" alt="" />
                                                    <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                </figure>
                                                <div className="lower-content">
                                                    <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                    <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                    <h4>$170.00<span> / Per person</span></h4>
                                                    <ul className="info clearfix">
                                                        <li><i className="far fa-clock"></i>5 Days</li>
                                                        <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                    <div className="btn-box">
                                                        <a href="tour-details.html">See Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
                                        <div className="tour-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <img src="assets/images/tour/tour-3.jpg" alt="" />
                                                    <a href="tour-details.html"><i className="fas fa-link"></i></a>
                                                </figure>
                                                <div className="lower-content">
                                                    <div className="rating"><span><i className="fas fa-star"></i>8.0 Superb</span></div>
                                                    <h3><a href="tour-details.html">Moscow Red City Land</a></h3>
                                                    <h4>$170.00<span> / Per person</span></h4>
                                                    <ul className="info clearfix">
                                                        <li><i className="far fa-clock"></i>5 Days</li>
                                                        <li><i className="far fa-map"></i>G87P, Birmingham</li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                                                    <div className="btn-box">
                                                        <a href="tour-details.html">See Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- tour-section end --> */}


                        {/* <!-- deals-section --> */}
                        <section className="deals-section" style={{backgroundImage: "url(assets/images/background/deals-1.jpg)"}}>
                            <div className="auto-container">
                                <div className="content_block_2">
                                    <div className="content-box">
                                        <h3>Group Travel <br />to New Zealand</h3>
                                        <div className="price"><h4>$150</h4><del>$300</del></div>
                                        <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor ux incidunt labore dolore magna aliqua Quis ipsum suspen.</p>
                                        <a href="tour-details.html" className="theme-btn">See Details</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- deals-section end --> */}


                        {/* <!-- place-section --> */}
                        <section className="place-section sec-pad">
                            <div className="anim-icon">
                                <div className="icon anim-icon-1" style={{backgroundImage: "url(assets/images/icons/anim-icon-1.png)"}}></div>
                                <div className="icon anim-icon-2" style={{backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                <div className="icon anim-icon-3" style={{backgroundImage: "url(assets/images/shape/shape-3.png)"}}></div>
                            </div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 title-column">
                                        <div className="sec-title">
                                            <p>Choose Your place</p>
                                            <h2>Popular Destinations</h2>
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 place-block">
                                        <div className="place-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/place-1.jpg" alt="" /></figure>
                                                <div className="text">
                                                    <h3><a href="destination-details.html">New York City</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 place-block">
                                        <div className="place-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/place-2.jpg" alt="" /></figure>
                                                <div className="text">
                                                    <h3><a href="destination-details.html">Norway Lake</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 place-block">
                                        <div className="place-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/place-3.jpg" alt="" /></figure>
                                                <div className="text">
                                                    <h3><a href="destination-details.html">Affrican Park</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 place-block">
                                        <div className="place-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/place-4.jpg" alt="" /></figure>
                                                <div className="text">
                                                    <h3><a href="destination-details.html">Vietnam</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 link-column">
                                        <div className="link-box centred">
                                            <h3>Find All <br />Destination</h3>
                                            <a href="destination.html" className="theme-btn">Find Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- place-section end --> */}


                        {/* <!-- map-section --> */}
                        <section className="map-section bg-color-1">
                            <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/shape-9.png)"}}></div>
                            <div className="outer-container">
                                <div className="sec-title centred">
                                    <p>Modern & Beautiful</p>
                                    <h2>Explore the World for Travel</h2>
                                </div>
                                <div className="map-inner" style={{backgroundImage: "url(assets/images/shape/map-1.png)"}}>
                                    <div className="map-content clearfix">
                                        <div className="single-location-box">
                                            <figure className="map-marker">
                                                <img src="assets/images/icons/marker-1.png" alt="" />
                                                <span>1</span>
                                            </figure>
                                            <div className="address-box">
                                                <h3>Moscow City</h3>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                            </div>
                                        </div>
                                        <div className="single-location-box">
                                            <figure className="map-marker">
                                                <img src="assets/images/icons/marker-1.png" alt="" />
                                                <span>2</span>
                                            </figure>
                                            <div className="address-box">
                                                <h3>Affrican Park</h3>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                            </div>
                                        </div>
                                        <div className="single-location-box current">
                                            <figure className="map-marker">
                                                <img src="assets/images/icons/marker-1.png" alt="" />
                                                <span>3</span>
                                            </figure>
                                            <div className="address-box">
                                                <h3>Norway Lake</h3>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                            </div>
                                        </div>
                                        <div className="single-location-box">
                                            <figure className="map-marker">
                                                <img src="assets/images/icons/marker-1.png" alt="" />
                                                <span>4</span>
                                            </figure>
                                            <div className="address-box">
                                                <h3>New York City</h3>
                                                <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- map-section end --> */}


                        {/* <!-- funfact-section --> */}
                        <section className="funfact-section centred">
                            <div className="anim-icon">
                                <div className="icon anim-icon-1" style={{backgroundImage: "url(assets/images/shape/shape-3.png)"}}></div>
                                <div className="icon anim-icon-2" style={{backgroundImage: "url(assets/images/shape/shape-3.png)"}}></div>
                            </div>
                            <div className="auto-container">
                                <div className="inner-container">
                                    <div className="row clearfix">
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one">
                                                <div className="inner-box">
                                                    <div className="pattern" style={{backgroundImage: "url(assets/images/shape/shape-5.png)"}}></div>
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="1500" data-stop="2000">0</span><span>+</span>
                                                        <p>Awesome Hikers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one">
                                                <div className="inner-box">
                                                    <div className="pattern" style={{backgroundImage: "url(assets/images/shape/shape-6.png)"}}></div>
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="1500" data-stop="70">0</span><span>+</span>
                                                        <p>Stunning Places</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one">
                                                <div className="inner-box">
                                                    <div className="pattern" style={{backgroundImage: "url(assets/images/shape/shape-7.png)"}}></div>
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="1500" data-stop="1200">0</span><span>+</span>
                                                        <p>Miles to Hike</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one">
                                                <div className="inner-box">
                                                    <div className="pattern" style={{backgroundImage: "url(assets/images/shape/shape-8.png)"}}></div>
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="1500" data-stop="15">0</span>
                                                        <p>Years in Service</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- funfact-section end --> */}


                        {/* <!-- testimonial-section --> */}
                        <section className="testimonial-section sec-pad centred">
                            <div className="auto-container">
                                <div className="sec-title centred">
                                    <p>Review & Testimonials</p>
                                    <h2>Top Reviews for Travio</h2>
                                </div>
                                <div className="three-item-carousel owl-carousel owl-theme owl-nav-none">
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Mike Hardson</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Amy Johnson</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Luaka Smith</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Mike Hardson</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Amy Johnson</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Luaka Smith</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Mike Hardson</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Amy Johnson</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <ul className="rating-box clearfix">
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                                <li><i className="icon-Star"></i></li>
                                            </ul>
                                            <div className="text">
                                                <div className="icon" style={{backgroundImage: "url(assets/images/icons/quote-1.png)"}}></div>
                                                <p>Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua ipsum suspen disse ultrices gravida Risus</p>
                                            </div>
                                            <div className="author-box">
                                                <h4>Luaka Smith</h4>
                                                <span className="designation">Traveler</span>
                                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- testimonial-section end --> */}


                        {/* <!-- video-section --> */}
                        <section className="video-section centred" style={{backgroundImage: "url(assets/images/background/video-1.jpg)"}}>
                            <div className="auto-container">
                                <div className="inner-box">
                                    <h2>Explore Your Travel</h2>
                                    <p>Your New Traveling Idea</p>
                                    <div className="video-btn">
                                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption="">
                                            <i className="far fa-play"></i>
                                            <span className="border-animation border-1"></span>
                                            <span className="border-animation border-2"></span>
                                            <span className="border-animation border-3"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- video-section end --> */}


                        {/* <!-- news-section --> */}
                        <section className="news-section sec-pad pb-220">
                            <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/shape-10.png)"}}></div>
                            <div className="auto-container">
                                <div className="sec-title">
                                    <p>News & Articles</p>
                                    <h2>Stay Update with Travio Tips</h2>
                                    <a href="blog.html" className="theme-btn-two">All Blog Posts</a>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <a href="blog-details.html"><img src="assets/images/news/news-1.jpg" alt="" /></a>
                                                    <span className="post-date"><i className="icon-Calendar"></i>5 Oct, 2020</span>
                                                </figure>
                                                <div className="lower-content">
                                                    <div className="category"><a href="blog-details.html">Lifestyle</a></div>
                                                    <h3><a href="blog-details.html">Including animation in your design system</a></h3>
                                                    <ul className="post-info clearfix">
                                                        <li><span>By</span> <a href="index.html">Eva Green</a></li>
                                                        <li> - October 13, 2020</li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.</p>
                                                    <div className="btn-box">
                                                        <a href="blog-details.html" className="theme-btn-two">See Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <a href="blog-details.html"><img src="assets/images/news/news-2.jpg" alt="" /></a>
                                                    <span className="post-date"><i className="icon-Calendar"></i>4 Oct, 2020</span>
                                                </figure>
                                                <div className="lower-content">
                                                    <div className="category"><a href="blog-details.html">Lifestyle</a></div>
                                                    <h3><a href="blog-details.html">Strategic & commercial with issues.</a></h3>
                                                    <ul className="post-info clearfix">
                                                        <li><span>By</span> <a href="index.html">Eva Green</a></li>
                                                        <li> - October 13, 2020</li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.</p>
                                                    <div className="btn-box">
                                                        <a href="blog-details.html" className="theme-btn-two">See Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <figure className="image-box">
                                                    <a href="blog-details.html"><img src="assets/images/news/news-3.jpg" alt="" /></a>
                                                    <span className="post-date"><i className="icon-Calendar"></i>3 Oct, 2020</span>
                                                </figure>
                                                <div className="lower-content">
                                                    <div className="category"><a href="blog-details.html">Lifestyle</a></div>
                                                    <h3><a href="blog-details.html">Best interior design idea for your home.</a></h3>
                                                    <ul className="post-info clearfix">
                                                        <li><span>By</span> <a href="index.html">Eva Green</a></li>
                                                        <li> - October 13, 2020</li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.</p>
                                                    <div className="btn-box">
                                                        <a href="blog-details.html" className="theme-btn-two">See Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- news-section end --> */}


                        {/* <!-- main-footer --> */}
                        <footer className="main-footer bg-color-2">
                            <div className="footer-top">
                                <div className="vector-bg" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)"}}></div>
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
                        {/* <!-- main-footer end --> */}



                        {/* <!--Scroll to top--> */}
                        <button className="scroll-top scroll-to-target" data-target="html">
                            <span className="fal fa-angle-up"></span>
                        </button>
                    </div>
            </>
        );
    }
}


export default Home;
