var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var DetailsView = Backbone.View.extend({

    className: 'details',

    events: {
        'click .go-back': 'goBack',
        'click .details-create': 'toCreateView'
    },

    template: _.template(`
        <div class="header-text">My Run</div>
        <%= date %>
        <%= time %>
        <%= description %>
        <button class="go-back">Go Back</button>
        <button class="details-create">+</button>
    `),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
    },

    goBack: function (e) {
        window.location.hash = '';
    },

    toCreateView: function (e) {
        window.location.hash = 'create';
    }

});

module.exports = DetailsView;