var React = require('react');
var CoffeeShopForm = require('./dashboard/components/coffee_shop_form');
var CoffeeShopVisits = require('./dashboard/components/coffee_shop_visits');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newShop: '', visitDate: new Date(), neighborhood: ''};
  }
  render() {
    return (
      <div>
        <div className="coffeeShopForm">
          <CoffeeShopForm newShop={this.state.newShop}
                          visitDate={this.state.visitDate} 
                          neighborhood={this.state.neighborhood} />
        </div>
        <CoffeeShopVisits shops={this.props.shops} 
                          newShop={this.state.newShop}
                          visitDate={this.state.visitDate}
                          neighborhood={this.state.neighborhood} />
      </div>
    );
  }
}

module.exports = Dashboard;
