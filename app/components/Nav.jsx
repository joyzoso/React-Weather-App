var React = require('react');
var{Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function (){
//     return (
//       <div>
//       <h2>Nav Component</h2>
//       <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Check Yo Weather</IndexLink>
//       <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>What's this about?</Link>
//       <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Check it out!</Link>
//       </div>
//     );
//   }
// });

var Nav = () => {
  return (
    <div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Check Yo Weather</IndexLink>
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>What's this about?</Link>
    <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Check it out!</Link>
    </div>
  );
};

module.exports = Nav;
