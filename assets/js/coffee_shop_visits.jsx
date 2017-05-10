var React = require('react');
var VisitDate = require('./visit_date.jsx');
var Visit = require('./visit.jsx');

class CoffeeShopVisits extends React.Component {
  render() {
    var visits = [];
    var lastDate;
    
    this.props.shops.forEach(function(shop) {
      if (shop.date != lastDate) {
        visits.push(<VisitDate date={shop.date} />);
      }
      visits.push(<Visit shopName={shop.name} neighborhood={shop.neighborhood} />);
      lastDate = shop.date;
    });
    return (
      <div>
        {visits}
      </div>
    );
  }
}

module.exports = CoffeeShopVisits;
