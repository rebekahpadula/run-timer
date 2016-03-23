var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');

var ListItemView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    template: _.template(`
        <span><%= date %></span>
        <span><%= time %></span>
        <hr>
    `),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    onClick: function () {
        window.location.hash = 'details/' + this.model.get('id');
    }

});

module.exports = ListItemView;