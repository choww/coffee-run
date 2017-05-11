var React = require('react');
var CoffeeShopForm = require('./dashboard/components/coffee_shop_form');
var CoffeeShopVisits = require('./dashboard/components/coffee_shop_visits');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newShop: '', visitDate: '', neighborhood: ''};
    this.handleNewShopInput = this.handleNewShopInput.bind(this);
    this.handleNeighborhoodInput = this.handleNeighborhoodInput.bind(this);
    this.handleVisitDateInput = this.handleVisitDateInput.bind(this);
    this.handleFormComplete = this.handleFormComplete.bind(this);
  }

  handleNewShopInput(input) {
    this.setState({newShop: input});
  }

  handleNeighborhoodInput(input) {
    this.setState({neighborhood: input});
  }
  
  handleVisitDateInput(input) {
    this.setState({visitDate: input});
  }

  handleFormComplete() {
    var csrf_token = this.props.getCookie('csrftoken');
    fetch('/dashboard/',
      { method: 'POST',
        credentials: 'same-origin',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrf_token
        },
        body: { name: this.state.newShop,
                neighborhood: this.state.neighborhood,
                visit_date: this.state.visitDate }
      });
  }

 
  render() {
    return (
      <div>
        <div className="coffeeShopForm">
          <CoffeeShopForm newShop={this.state.newShop}
                          visitDate={this.state.visitDate} 
                          neighborhood={this.state.neighborhood}
                          handleNewShopInput={this.handleNewShopInput}
                          handleNeighborhoodInput={this.handleNeighborhoodInput}
                          handleVisitDateInput={this.handleVisitDateInput}
                          handleFormComplete={this.handleFormComplete} />
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
