var React = require('react');

class Visit extends React.Component {
  render() {
    return (  
      <div>
        <strong>{this.props.date}</strong>     
        <ul>
           <li>{this.props.shopName} - {this.props.neighborhood}</li>
        </ul>
      </div>
    );
  }
};

module.exports = Visit;
