var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeaderView = Backbone.View.extend({

    className: 'header',

    template: _.template(`
        <div>Run Timer</div>
    `),

    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = HeaderView;