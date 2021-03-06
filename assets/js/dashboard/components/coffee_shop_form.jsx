import React from 'react';
import DatePicker from 'react-datepicker';

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

  handleVisitDateChange(date, e) {
    this.props.handleVisitDateInput(date);
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
            <DatePicker selected={this.props.visitDate}
                        onChange={this.handleVisitDateChange} 
                        autoFocus />
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
