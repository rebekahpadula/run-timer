var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var ListItemModel = require('./ListItemModel');

var CreateView = Backbone.View.extend({

    events: {
        'click #save': 'onSave',
        'click #cancel': 'onCancel'
    },

    template: _.template(`
        <span class="header-text">New Run<span>
        <input id="run-time" type="text" placeholder="Run Time">
        <input id="run-date" type="text" placeholder="Race Date">
        <textarea id="run-notes" type="text-area" placeholder="Race Notes"></textarea>
        <button id="cancel">Cancel</button>
        <button id="save">Save</button>
    `),

    render: function () {
        this.$el.html(this.template());
    },

    onCancel: function () {
        window.location.hash = '';
    },

    onSave: function () {
        var runTime = this.$('#run-time').val();
        var runDate = this.$('#run-date').val();
        var runNotes = this.$('#run-notes').val();
        this.collection.add({
            date: runDate,
            time: runTime,
            description: runNotes
        });
        window.location.hash = '';
    }

});

module.exports = CreateView;