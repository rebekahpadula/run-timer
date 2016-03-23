var Backbone = require('backbone');

var ids = 0;

var CreateModel = Backbone.Model.extend({

    defaults: {
        time: 00:00:00,
        date: '',
        notes: ''
    },

    initialize: function () {
        this.set('id', ++ids);
    }
});

module.exports = CreateModel;