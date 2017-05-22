var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// })

var Examples = (props) => {
  return (
    <div className="all">
      <h1 className="text-center page-title">Zeppelin Rules!!</h1>
      <p> Best songs ever include:</p>

          <p>Tangerine</p>
          <p>When The Levee Breaks</p>
          <p>Hey Hey What Can I Do</p>

    <p>
      <Link to='/?location=Houston'>Search for Houston Weather</Link>
    </p>
  <p>
    <Link to='/?location=Miami'>Search for Miami Weather</Link>
  </p>
    </div>
  )
};
module.exports = Examples;
