import React, { Component } from 'react';
import CustomNewsRow from '../Components/CustomNewsRow';
import { Modal, Button } from 'react-bootstrap'

class News extends Component {
   
    render() {
        return (
            <>
             <section className="banner-section" style={{backgroundColor:'white'}}>
                    <div className="pattern-layer"></div>
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
                </section>
            </>
        );
    }
}


export default News;
