import React from "react";
const BookList = props => {
  return props.bookDetails.map((val, idx) => {
    let destination = `destination-${idx}`,
      departureDate = `dateOfPublish-${idx}`,
      arrivalDate = `arrivalDate-${idx}`
    return (
      <div className="booking-form clearfix" key={val.index}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Destination"
            name="destination"
            id={destination}
            data-id={idx}
          />
          <label className="form-label">Where to?</label>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Arrival Date"
            name="arrivalDate"
            id={arrivalDate}
            data-id={idx}
          />
          <label className="form-label">Arrival Date</label>
        </div>
        <div className="form-group input-date">
          <input
            type="date"
            className="form-control"
            placeholder="Departure Date"
            name="departureDate"
            id={departureDate}
            data-id={idx}
          />
          <label className="form-label">Departure Date</label>
        </div>
        <div className="message-btn">
            <button type="submit" className="theme-btn">
                <i className="far fa-search"></i>
                Find Now
            </button>
        </div>
            {idx === 0 ? (
                <button
                onClick={() => props.add()}
                type="button"
                className="btn btn-primary text-center"
                id="add-button"
                >
                <i className="fa fa-plus-circle" aria-hidden="true" />
                </button>
            ) : (
                <button
                className="btn btn-danger"
                id="minus-button"
                onClick={() => props.delete(val)}
                >
                <i className="fa fa-minus" aria-hidden="true" />
                </button>
            )}
        </div>
    );
  });
};
export default BookList;
