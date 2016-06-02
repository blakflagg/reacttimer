var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute,hashHistory} = require('react-router');

var Timer = React.createClass({

render : function(){
  return(
    <div>
      <h2 className="text-center page-title">Timer</h2>
    </div>

  )

}

});

module.exports = Timer;
