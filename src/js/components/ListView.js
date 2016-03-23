var ListItemView = require('./ListItemView');

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var ListView = Backbone.View.extend({

    className: 'runs',

    events: {
        'click button': 'newRun'
    },

    template: _.template(`
        <div class="runs-list"></div>
        <button class="add">+</button>
    `),

    initialize: function () {
        this.children = [];
        this.render();
    },

    render: function () {
        var _this = this;

        this.$el.html(this.template());

        this.children.forEach(function (item) {
            item.remove();
        });

        this.children = this.collection.map(function (model) {
            return new ListItemView({ model: model });
        });

        this.children.forEach(function (item) {
            item.render();
            _this.$('.runs-list').append(item.$el);
        });
    },

    newRun: function (e) {
        window.location.hash = 'create';
    }

});

module.exports = ListView;