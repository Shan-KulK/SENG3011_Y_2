import React from "react";
import Booking from "./Booking";

class BookingForm extends React.Component {
  state = {
    bookDetails: [
      {
        index: Math.random(),
        destination: "",
        arrivalDate: "",
        departureDate: ""
      }
    ]
  };
  handleChange = e => {
    if (
      ["destination", "arrivalDate", "departureDate"].includes(
        e.target.name
      )
    ) {
      let bookDetails = [...this.state.bookDetails];
      bookDetails[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewRow = e => {
    this.setState(prevState => ({
      bookDetails: [
        ...prevState.bookDetails,
        {
          index: Math.random(),
          destination: "",
          arrivalDate: "",
          departureDate: ""
        }
      ]
    }));
  };

  deteteRow = index => {
    this.setState({
      bookDetails: this.state.bookDetails.filter(
        (s, sindex) => index !== sindex
      )
    });
  };

  clickOnDelete(record) {
    this.setState({
      bookDetails: this.state.bookDetails.filter(r => r !== record)
    });
  }
  render() {
    let { bookDetails } = this.state;
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <Booking
            add={this.addNewRow}
            delete={this.clickOnDelete.bind(this)}
            bookDetails={bookDetails}
            />
        </form>
      </div>
    );
  }
}
export default BookingForm;


// import React from 'react'

// function appendForm() {
//     console.log("hello world");
//     var newInput = `input-${this.state.inputs.length}`
// }

// function BookingForm() {
//     return (
//         <>
//             <form className="booking-form clearfix">

//         </>
//     )
// }

// export default BookingForm
