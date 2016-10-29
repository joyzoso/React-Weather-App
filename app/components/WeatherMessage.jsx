var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location}=this.props;
//
//     return (
//       <h3>In {location} it is {temp}, yo!</h3>
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>In {location} it is {temp}, yo!</h3>
  )
};


module.exports = WeatherMessage;
