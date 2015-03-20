/** @jsx React.DOM */

var React = require('react');
var TickerList = require('./components/app-tickeritems');

React.renderComponent(<TickerList/>, document.getElementById("content"));
