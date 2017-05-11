var React = require('react');

class CoffeeShopForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewShopChange = this.handleNewShopChange.bind(this);
    this.handleNeighborhoodChange = this.handleNeighborhoodChange.bind(this);
    this.handleVisitDateChange = this.handleVisitDateChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleNewShopChange(e) {
    this.props.handleNewShopInput(e.target.value);
  }  

  handleNeighborhoodChange(e) {
    this.props.handleNeighborhoodInput(e.target.value);
  }

  handleVisitDateChange(e) {
    this.props.handleVisitDateInput(e.target.value);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.handleFormComplete();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="columns">
          <div className="column is-3">
            <label>Name</label>
            <input type="text" name="name" 
                   defaultValue={this.props.newShop} 
                   onChange={this.handleNewShopChange} />
          </div>
          <div className="column is-3"> 
            <label>Neighborhood</label>
            <input type="text" name="neighborhood" 
                   defaultValue={this.props.neighborhood}
                   onChange={this.handleNeighborhoodChange} />
          </div>
          <div className="column is-3"> 
            <label>Date Visited</label>
            <input type="text" name="visit_date" 
                   defaultValue={this.props.visitDate}
                   onChange={this.handleVisitDateChange} />
          </div>
          <div className="column is-1">
            <button className="button is-primary">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

module.exports = CoffeeShopForm;
