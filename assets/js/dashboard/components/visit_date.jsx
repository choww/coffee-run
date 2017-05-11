import React from 'react';

class VisitDate extends React.Component {
  render() {
    return (
      <div>
        <strong>{this.props.date}</strong>
      </div>
    );
  }
}

module.exports = VisitDate;
