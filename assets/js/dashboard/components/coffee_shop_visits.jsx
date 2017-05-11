import React from 'react';
import VisitDate from './visit_date';
import Visit from './visit';

class CoffeeShopVisits extends React.Component {
  render() {
    var visits = [];
    var visitDates = [];
    var lastDate;
     
    this.props.shops.forEach(function(shop) {
      if (shop.date != lastDate) {
        visits.push(<VisitDate date={shop.date} />);
        visitDates.push(shop.date);
      }
      visits.push(<Visit shopName={shop.name} neighborhood={shop.neighborhood} />);
      lastDate = shop.date;
    });

    // ADD NEW SHOP VISITS TO BEGINNING OF LIST
    if (this.props.newShop != '' && this.props.visitDate != '') {
      visits.unshift(<Visit shopName={this.props.newShop} 
                            neighborhood={this.props.neighborhood} />);

      if (visitDates.indexOf(this.props.visitDate) == -1) {
        visits.unshift(<VisitDate date={this.props.visitDate} />); 
        visitDates.push(this.props.visitDate);
      }
    }
    
    return (
      <div>
        {visits}
      </div>
    );
  }
}

module.exports = CoffeeShopVisits;
