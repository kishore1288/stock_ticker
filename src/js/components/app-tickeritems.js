/** @jsx React.DOM */
var React = require('react');
var TickerItem = require('../components/app-tickeritem');
var AppStore = require('../stores/app-store.js');
var TickerList = React.createClass({
        render: function() {
            var tickerNodes = this.state.tickerData.map(function(ticker) {
                return <TickerItem ticker={ticker} key={ticker.symbol}></TickerItem>;
        })

    return (<div id="tickerpanel">
    {tickerNodes}
    </div>);
    },

    getInitialState: function () {
        return {
            tickerData:[]
        };
    },

    loadData: function () {
        var latestData = AppStore.getLatest();
        this.setState({
            tickerData: latestData
        });
    },

    componentDidMount: function () {
        this.loadData();
        this.interval = setInterval(this.loadData, 5000);
    },

    componentWillUnmount: function () {
        clearInterval(this.interval);
    }
    });
	
	module.exports = TickerList;