/** @jsx React.DOM */
var React = require('react');

var TickerItem = React.createClass({
            render: function() {
        return (
                <div className={"ticker " + (this.props.ticker.dayChange > 0 ? 'up' : 'down')}>
        <span className="symbol">{this.props.ticker.symbol}</span>
    <span className="price">{"$" + (this.props.ticker.open + this.props.ticker.dayChange).toFixed(2)}</span>
    <span className="change">{(this.props.ticker.dayChange >0 ? "+" : "-") + Math.abs(this.props.ticker.dayChange)}</span>
    </div>
    );
    },
        getDefaultProps: function () {
        return {
            ticker: {
                symbol: "",
                open: 0,
                dayChange: 0
            }
        };
    }
});

module.exports = TickerItem;