import React, { Component } from 'react';
import { Map, GoogleApiWrapper,mapStyles } from 'google-maps-react';

class Trips extends Component {
    render() {
        return (
            <>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                />
            </>
        );
    }
}


export default Trips;
