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
    <div>
      <h1 className="text-center">Zeppelin Rules!!</h1>
      <p> Best songs ever include:</p>
      <ol>
        <li>
          <Link to='/?location=WhenLeveeBreaks'>When The Levee Breaks</Link>
        </li>
      <li>
        <Link to='/?location=HeyHey'>Hey Hey What Can I Do</Link>
      </li>
      <li>Tangerine</li>
    </ol>
    </div>
  )
};
module.exports = Examples;
