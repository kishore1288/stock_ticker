var AppDispatcher = require('js/dispatchers/app-dispatcher');
var AppConstants = require('js/constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var _activeTickers = [
        {
            symbol: "VISTEX",
            open: getRandomNumberInRange(10, 30),
            dayChange: 0
        },

        {
            symbol: "BLUWARE",
            open: getRandomNumberInRange(80, 100),
            dayChange: 0
        },

        {
            symbol: "SAP",
            open: getRandomNumberInRange(60, 100),
            dayChange: 0
        },

        {
            symbol: "SALESFORCE",
            open: getRandomNumberInRange(40, 50),
            dayChange: 0
        },

        {
            symbol: "MYAGREE",
            open: getRandomNumberInRange(60, 90),
            dayChange: 0
        },

        {
            symbol: "HWKYEE",
            open: getRandomNumberInRange(20, 40),
            dayChange: 0
        },

        {
            symbol: "YAHOO",
            open: getRandomNumberInRange(20, 40),
            dayChange: 0
        },

        {
            symbol: "CRM",
            open: getRandomNumberInRange(10, 30),
            dayChange: 0
        },

        {
            symbol: "GE",
            open: getRandomNumberInRange(10, 20),
            dayChange: 0
        },

        {
            symbol: "GM",
            open: getRandomNumberInRange(30, 35),
            dayChange: 0
        },

        {
            symbol: "BBY",
            open: getRandomNumberInRange(5, 10),
            dayChange: 0
        },

        {
            symbol: "C",
            open: getRandomNumberInRange(32, 37),
            dayChange: 0
        },

        {
            symbol: "JPM",
            open: getRandomNumberInRange(40, 70),
            dayChange: 0
        },

        {
            symbol: "BAC",
            open: getRandomNumberInRange(11, 14),
            dayChange: 0
        }
    ];

    function getRandomNumberInRange(min, max)
    {
        return +(Math.random() * (max - min + 1) + min).toFixed(2);
    }

    function getrandomMultiplier()
    {
        return parseInt(Math.random() * 10) % 4 === 0 ? 1 : -1;
    }




var AppStore = merge(EventEmitter.prototype, {
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  
  getTickets : function(){
    return _activeTickers;
  },
	  getLatest : function () {
				_activeTickers.forEach(function(ticker) {
					ticker.dayChange = (getrandomMultiplier() * getRandomNumberInRange(0, 1) * ((ticker.open + ticker.dayChange)/100));

					if (ticker.dayChange > (2 * ticker.open / 100)) {
						ticker.dayChange -=  (0.5 * ticker.open / 100);
					} else if (ticker.dayChange < (2 * ticker.open / 100)) {
						ticker.dayChange +=  (0.5 * ticker.open / 100);
					}

					ticker.open = +ticker.open.toFixed(2);
					ticker.dayChange = +ticker.dayChange.toFixed(2);
				});

				return _activeTickers;
	  },
  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case AppConstants.ON_DAY_CHANGE:
        this.getLatest();
        break;
    }
    AppStore.emitChange();

    return true;
  })
});

module.exports = AppStore;