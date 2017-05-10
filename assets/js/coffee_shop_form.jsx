var React = require('react');

class CoffeeShopForm extends React.Component {
  render() {
    return (
      <form>
        <div className="columns">
          <div className="column  is-5">
            <label>Name</label>
            <input type="text" name="name"/>
          </div>
          <div className="column is-5"> 
            <label>Date Visited</label>
            <input type="text" name="visit_date"/>
          </div>
          <button className="button is-primary">Add</button>
        </div>
      </form>
    );
  }
}

module.exports = CoffeeShopForm;
