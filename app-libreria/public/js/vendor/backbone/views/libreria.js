let Libreria = Backbone.View.extend({
    /*
    tagName: 'span',
    className: 'nombreclase',
    id: 'nombreId'
    */
    el: '.vista',
    initialize: function() {
        this.render();
    },
    events: {
        'click .cambiarColor': 'cambiarColor'
    },
    cambiarColor: function() {
        this.$el.css('color', 'red');
    },
    render: function () {
        this.$el.html('<p>El método render en acción</p>');
    },
    
});