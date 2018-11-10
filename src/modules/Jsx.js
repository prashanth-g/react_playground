import React, { Component } from 'react';

const name = 'Prashanth';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Prashanth',
    lastName: 'G'
};

class Jsx extends Component {
  render() {
    return (
      <div className="Jsx">
          <p>
            Inside Jsx elements.{name}. Full Name: {formatName(user)}!
          </p>
      </div>
    );
  }
}

export default Jsx;
