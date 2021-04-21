import React from "react";
import TripsCard from "./TripsCard";

class AddNewTripCard extends React.Component {
  state = {
    cardDetails: [
      {
        index: Math.random(),
      }
    ]
  };
  handleChange = e => {
    if (
      ["destination", "arrivalDate", "departureDate"].includes(
        e.target.name
      )
    ) {
      let cardDetails = [...this.state.cardDetails];
      cardDetails[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewCard = e => {
    this.setState(prevState => ({
      cardetails: [
        ...prevState.cardDetails,
        {
          index: Math.random(),
        }
      ]
    }));
  };

  deteteRow = index => {
    this.setState({
      cardDetails: this.state.cardDetails.filter(
        (s, sindex) => index !== sindex
      )
    });
  };

  clickOnDelete(record) {
    this.setState({
      cardDetails: this.state.cardDetails.filter(r => r !== record)
    });
  }
  render() {
    let { cardDetails } = this.state;
    return (
      <div className="content">
        <TripsCard
            add={this.addNewCard}
            delete={this.clickOnDelete.bind(this)}
            cardDetails={cardDetails}
        />
      </div>
    );
  }
}
export default AddNewTripCard;