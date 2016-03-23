// Creating main app view that other views get injected into

var Backbone = require('backbone');
var dispatcher = require('./dispatcher');
var _ = require('underscore');

var AppView = Backbone.View.extend({

    className: 'app',

    template: _.template(`
        <div class="page-slot"></div>
    `),

    initialize: function (options) {
        this.listenTo(dispatcher, 'show', this.show);
    },

    show: function (view) {
        if (view) {
            if (this.child) {
                this.child.remove();
            }

            view.render();

            this.$('.page-slot').append(view.$el);
            this.child = view;
        }
    },

    render: function () {
        this.$el.append(this.template());
    }
});

module.exports = AppView;