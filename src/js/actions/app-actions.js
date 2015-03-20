var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  increaseItem:function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_ITEM,
      index: index
    })
  }
}

module.exports = AppActions;