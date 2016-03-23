var Backbone = require('backbone');
var $ = require('jquery');

var AppRouter = require('./components/AppRouter');
var AppView = require('./components/AppView');
var HeaderView = require('./components/HeaderView');

var router = new AppRouter();

var appView = new AppView();

var headerView = new HeaderView();

headerView.render();

appView.render();

$('#app-container').append(headerView.$el);

$('#app-container').append(appView.$el);

Backbone.history.start();