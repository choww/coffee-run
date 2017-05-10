var React = require('react');
var CoffeeShopForm = require('./coffee_shop_form');
var CoffeeShopVisits = require('./coffee_shop_visits');

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="coffeeShopForm">
          <CoffeeShopForm/>
        </div>
        <CoffeeShopVisits shops={this.props.shops} />
      </div>
    );
  }
}

module.exports = Dashboard;
