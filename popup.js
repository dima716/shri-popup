var POPUP = function(){

    var dialog = document.querySelector('dialog');
    var show = document.querySelector('.show');
    var close = document.querySelector('.close');

    return {

        initialize: function() {
            this.setUpListeners();
        },

        setUpListeners: function() {
            show.addEventListener('click', function() {
                dialog.showModal();
                console.log('dialog opened');
            });
            close.addEventListener('click', function() {
                dialog.close();
                console.log('dialog closed');
            });
        }
    }
}();

POPUP.initialize();