var React = require('react');
var{Link, IndexLink} = require('react-router');



let Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }

  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
              <li className="menu-text">Weather + Rock</li>
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Check Yo Weather </IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>What's this about? </Link></li>
              <li><Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Guess Who Rules? </Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="search weather by city" ref="search"/></li>
              <li><input type="submit" className="button" value="Fetch Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
