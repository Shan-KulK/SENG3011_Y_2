import React from "react";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Page from './Page';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div className="profile-container" style={{marginTop: "17%", marginBottom: "100px"}}>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            style={{marginLeft: "45%"}}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="auto-container">
          <div className="sec-title">
              <h1 style={{marginTop: "2%"}}>Travel Advice</h1>
              <h5 style={{marginLeft: "1%", marginRight: "1%"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </h5>
          </div>
      </div>
        {/* <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre> */}
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Page />,
});