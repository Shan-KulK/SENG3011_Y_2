import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };
      onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };
  render() {
    return (
        <>
            <section className="banner-section" >
                <Map
                    google={this.props.google}
                    zoom={6}
                    style={mapStyles}
                    initialCenter={{ lat: -33.854, lng: 151.206 }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Kenyatta International Convention Centre'}
                        />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                        >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                    </InfoWindow>
                </Map >
                <div className="pattern-layer" ></div>
                <div className="auto-container">
                    <div className="content-box"></div>
                </div>
            </section>
            <section className="trips-section" style={{height: "500px", width: "100%"}}>
                <div className="container" style={{marginTop: "250px"}}>
                    <h1> Your Trips</h1>
                </div>
            </section>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDxBPNnifjKm50KUTcMutB30Due7eA2OJI'
})(MapContainer);






// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper,mapStyles } from 'google-maps-react';

// class Trips extends Component {
//     render() {
//         return (
//             <>
            // <section className="banner-section" >
            //         <div className="pattern-layer" ></div>
            //         <div className="auto-container">
            //             <div className="content-box"></div>
            //                 <Map
            //                     google={this.props.google}
            //                     zoom={8}
            //                     style={mapStyles}
            //                     initialCenter={{ lat: 47.444, lng: -122.176 }}
            //                 />
            //         </div>
            //         <div className="container" style={{margin: "100px"}}>
            //             <h1> Your Trips</h1>
            //         </div>
            //     </section>
//             </>
//         );
//     }
// }


// export default Trips;
