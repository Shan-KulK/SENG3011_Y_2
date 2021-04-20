import React, { Component } from 'react';
import CustomNewsRow from '../Components/CustomNewsRow';
import { Modal, Button } from 'react-bootstrap'

class News extends Component {
   
    render() {
        return (
            <>
             <section className="banner-section" style={{ backgroundImage: "url(assets/images/banner/travel.jpg)" }}>
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h2>Welcome To News</h2>
                            <p>Name your news stream</p><br />
                            <p>Add Tags to filter you news section</p><br />
                            <p>Choose Your news source</p>
                            <div className="form-inner">

                            <CustomNewsRow />
                            
                                


                            </div>
                        </div>
                    </div>
                    <div className="auto-container">
                        <button type="button" className="news-row-btn" style={{marginLeft: "5%", marginRight: "5%", width: "90%"}}><i class="fas fa-plus"></i></button>
                    </div>
                </section>
            </>
        );
    }
}


export default News;
