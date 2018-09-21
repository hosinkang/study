$(document).ready(function () {
    pageMain.init();
});

var pageMain = (function(){
    var set, bindEvent;

    set = function(p){
        var len = Object.keys(p).length;
        var $list = $('.list li');

        while(len--){
            if( p['link' + (len+1)] == 'b' ) $list.eq(len).addClass('end');
        }
    };

    bindEvent = function(){
        $(document).on('.end a', 'click', function(e){
            e.preventDefault();

        });
    };

    return{
        init: function(){
            set(Param);
            bindEvent();
        }
    }
})();