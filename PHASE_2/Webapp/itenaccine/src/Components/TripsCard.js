import React from 'react'

// const TripsCard = props => {
//     return props.cardDetails.map((val, idx) => {

//         return (
//             <div className="col-lg-3 col-md-6 col-sm-12 feature-block" key={val.idx} id={idx}>
//                 <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
//                     <div className="inner-box">
//                         <figure className="image-box"><img src="assets/images/resource/feature-1.jpg" alt="" /></figure>
//                         <div className="lower-content">
//                             {/* <div className="icon-box"><i className="icon-1"></i></div> */}
//                             <h4>2000+ Our Worldwide Guides</h4>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     });
// };

function TripsCard() {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/resource/feature-1.jpg" alt="" /></figure>
                        <div className="lower-content">
                            {/* <div className="icon-box"><i className="icon-1"></i></div> */}
                            <h4>2000+ Our Worldwide Guides</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default TripsCard
