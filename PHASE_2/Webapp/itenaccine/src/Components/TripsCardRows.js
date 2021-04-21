import React from 'react'
import TripsCard from './TripsCard';
  
export default function TripsCardRows(props) {
    return (
        <>
            <section className="feature-section centred bg-color-1 sec-pad">
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <h2 className="card-news-title">{props.title}</h2>
                        </div>
                        <div className="row clearfix">
                            <TripsCard title={props.card1title} />
                            <TripsCard title={props.card2title} />
                            <TripsCard title={props.card3title} />
                            <TripsCard title={props.card4title} />
                        </div>
                    </div>
                </section> 
        </>
    )
}
