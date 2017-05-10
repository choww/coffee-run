var React = require('react');

class CoffeeShopForm extends React.Component {
  render() {
    return (
      <form>
        <div className="columns">
          <div className="column is-3">
            <label>Name</label>
            <input type="text" name="name" defaultValue={this.props.newShop} />
          </div>
          <div className="column is-3"> 
            <label>Neighborhood</label>
            <input type="text" name="neighborhood" defaultValue={this.props.neighborhood} />
          </div>
          <div className="column is-3"> 
            <label>Date Visited</label>
            <input type="text" name="visit_date" defaultValue={this.props.visitDate} />
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
