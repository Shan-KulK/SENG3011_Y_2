import React from 'react'
import TripsCard from './TripsCard';

export default function TripsCardRows() {
    return (
        <>
            <section className="feature-section centred bg-color-1 sec-pad">
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <h2>News</h2>
                        </div>
                        <div className="row clearfix">
                            <TripsCard />
                        </div>
                    </div>
                </section> 
        </>
    )
}
