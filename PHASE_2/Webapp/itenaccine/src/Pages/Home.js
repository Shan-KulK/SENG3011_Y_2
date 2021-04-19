import React, { Component } from 'react';
import BookingForm from '../Components/BookingForm';
import NewsRow from '../Layout/NewsRow';

class Home extends Component {
    
    
    render() {
        return (
            <>
                {/* <!-- banner-section --> */}
                <section className="banner-section" style={{ backgroundImage: "url(assets/images/banner/travel.jpg)" }}>
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h2>Explore <br />Your Travel</h2>
                            <p>Discover your next great adventure, become an explorer to get started!</p>
                            <div className="form-inner">

                                <BookingForm />


                                {/* <form action="index.html" method="post" className="booking-form clearfix">
                                    <div className="form-group">
                                            <input type="text" name="service" placeholder="Where to?" required="" />
                                    </div>
                                    <div className="form-group input-date">
                                        <i className="far fa-angle-down"></i>
                                        <input type="text" name="date" placeholder="Departure?" id="datepicker" />
                                    </div>
                                    <div className="form-group input-date">
                                        <i className="far fa-angle-down"></i>
                                        <input type="text" name="date" placeholder="Arriving?" id="datepicker" />
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
                                    <div className="message-btn">
                                        <button type="button" className="theme-btn" onClick={() => props.add()}><i className="fa fa-plus"></i></button>
                                    </div>
                                </form> */}
                                
                                


                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- banner-section end --> */}


                {/* <!--  Global news-section --> */}
                <section className="news-section sec-pad pb-220">
                    {/* <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div> */}
                    <div className="auto-container">
                        <div className="sec-title">
                            <p>News & Articles</p>
                            <h2>Top Global News</h2>
                            <a href="blog.html" className="theme-btn-two">All Blog Posts</a>
                        </div>



                        <NewsRow />



                        {/* <div className="row clearfix">
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
                        </div> */}
                    </div>
                </section>
                {/* <!-- news-section end --> */}
                
                {/* <!-- Local New Section start --> */}
                <section className="news-section sec-pad pb-220">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title">
                            <p>News & Articles</p>
                            <h2>Top Local News</h2>
                            <a href="blog.html" className="theme-btn-two">All Blog Posts</a>
                        </div>

                        <NewsRow />
                        {/* <div className="row clearfix">
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
                        </div> */}
                    </div>
                </section>
                {/* <!-- news-section end --> */}

                {/* <!-- feature-section --> */}
                {/* <section className="feature-section centred bg-color-1 sec-pad">
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
                </section> */}
                {/* <!-- feature-section end --> */}


                {/* <!-- about-section --> */}
                {/* <section className="about-section">
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
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
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
                </section> */}
                {/* <!-- tour-section end --> */}


                {/* <!-- deals-section --> */}
                {/* <section className="deals-section" style={{ backgroundImage: "url(assets/images/background/deals-1.jpg)" }}>
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
                </section> */}
                {/* <!-- deals-section end --> */}


                {/* <!-- place-section --> */}
                {/* <section className="place-section sec-pad">
                    <div className="anim-icon">
                        <div className="icon anim-icon-1" style={{ backgroundImage: "url(assets/images/icons/anim-icon-1.png)" }}></div>
                        <div className="icon anim-icon-2" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                        <div className="icon anim-icon-3" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
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
                </section> */}
                {/* <!-- place-section end --> */}


                {/* <!-- map-section --> */}
                {/* <section className="map-section bg-color-1">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                    <div className="outer-container">
                        <div className="sec-title centred">
                            <p>Modern & Beautiful</p>
                            <h2>Explore the World for Travel</h2>
                        </div>
                        <div className="map-inner" style={{ backgroundImage: "url(assets/images/shape/map-1.png)" }}>
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
                </section> */}
                {/* <!-- map-section end --> */}


                {/* <!-- funfact-section --> */}
                {/* <section className="funfact-section centred">
                    <div className="anim-icon">
                        <div className="icon anim-icon-1" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                        <div className="icon anim-icon-2" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                    <div className="counter-block-one">
                                        <div className="inner-box">
                                            <div className="pattern" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
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
                                            <div className="pattern" style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}></div>
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
                                            <div className="pattern" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
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
                                            <div className="pattern" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
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
                {/* <section className="testimonial-section sec-pad centred">
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                                        <div className="icon" style={{ backgroundImage: "url(assets/images/icons/quote-1.png)" }}></div>
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
                </section> */}
                {/* <!-- testimonial-section end --> */}


                {/* <!-- video-section --> */}
                {/* <section className="video-section centred" style={{ backgroundImage: "url(assets/images/background/video-1.jpg)" }}>
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
                </section> */}
                {/* <!-- video-section end --> */}

            </>
        );
    }
}


export default Home;
