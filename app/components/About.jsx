var React = require('react');


// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
    <h2 className="text-center">About Page of Funtime Sensationalism</h2>
    <p> Cosmic fugue birth, quasar cosmos. A billion trillion and billions upon billions upon billions upon billions upon billions upon billions upon billions!
    </p>
    <ul>
      <li>
        <a href="https://www.instagram.com/brullencat/">Brullen</a> ~ The Cutest Kitty In The World
      </li>
      <li>
        <a href="http://www.ledzeppelin.com/">Led Zeppelin</a> ~ The Best Rock Band In The World
      </li>
    </ul>
  </div>
  )
};

module.exports = About;
