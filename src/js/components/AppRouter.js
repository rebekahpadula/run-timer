var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var dispatcher = require('./dispatcher');
var ListView = require('./ListView');
var DetailsView = require('./DetailsView');
var CreateView = require('./CreateView');

var RunCollection = require('./RunCollection');

var collection = new RunCollection([
    { id: 1, date: 'Feb 2, 2016', time: '01:01:02' },
    { id: 2, date: 'Feb 3, 2016', time: '01:01:02' },
    { id: 3, date: 'Feb 4, 2016', time: '01:02:02' }
]);

var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'homeListView',
        'details/:id': 'details',
        'create': 'create'
    },

    homeListView: function () {
        dispatcher.trigger('show', new ListView({ collection: collection }));
    },

    details: function (id) {
        var model = collection.find({ id: parseInt(id) });

        dispatcher.trigger('show', new DetailsView({ model: model }));
    },

    create: function () {
        dispatcher.trigger('show', new CreateView({ collection: collection }));
    }

});

module.exports = AppRouter;