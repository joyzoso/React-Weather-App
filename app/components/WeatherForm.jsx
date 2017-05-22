var React = require('react');
var WeatherForm = React.createClass ({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="search by city" width="50%" height="50" ref="location"/>
          <button className="button expanded hollow">Fetch Weather!</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
