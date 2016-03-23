var Backbone = require('backbone');

var ids = 0;

var ListItemModel = Backbone.Model.extend({

    defaults: {
        date: '',
        time: '00:00:00',
        description: ''
    },

    initialize: function () {
        this.set('id', ++ids);
    }

});

module.exports = ListItemModel;