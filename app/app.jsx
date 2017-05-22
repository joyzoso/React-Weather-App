//require keywords for webpack to use the modules
var React = require('react');
var ReactDOM = require('react-dom');
//object destructuring syntax es6
//4 variables from the react-router library
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require ('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
//inject into html
//load css
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="about" component={About}/>
    <Route path="Examples" component={Examples}/>
    <IndexRoute component={Weather}/>
  </Route>
</Router>,
  document.getElementById('app')
  );



//presentational components take props and render then to the screen
//state can be changes and props can't
//container components should just only render children and maintain state
//props are used for initializing a component with data
//state is used for keeping track of data that changes in a component
//presentational component uses props to display info
