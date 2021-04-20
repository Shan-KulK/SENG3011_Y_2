import React from 'react'

function CustomNewsCard() {
    return (
        <>
            <div className="col news-block">
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
        </>
    )
}

export default CustomNewsCard
