var Backbone = require('backbone');
var ListItemModel = require('./ListItemModel');

var RunCollection = Backbone.Collection.extend({

    model: ListItemModel
});

module.exports = RunCollection;