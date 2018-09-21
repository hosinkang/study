$(document).ready(function () {
    pageMain.init();
});

var pageMain = (function(){
    var set, bindEvent;
    var t1, t2;

    set = function(p){
        var len = Object.keys(p).length;
        var $list = $('.list li');

        while(len--){
            if( p['link' + (len+1)] == 'b' ) $list.eq(len).addClass('end');
        }
    };

    bindEvent = function(){
        $(document).on({
            'mouseenter': function(){
                t1.clear();
                t2.clear();

                t1.fromTo($(this).find('strong'), 0.35, { scaleY: 1, x: 0, y: 0 }, { scaleY: 0, opacity: 0, ease: Power2.easeOut });
                t1.set($(this).find('strong'), { scaleY: 1, y: -30, right: 15, marginRight: 0 }, '-=0.1');
                t1.to($(this).find('strong'), 0.2, { y: 0, opacity: 1, ease: Power2.easeOut });

                t2.to($(this).find('.bg'), 0.2, { opacity: 0,  ease: Power2.easeOut });
                t2.fromTo($(this).find('.character'), 0.5, { x: -50, opacity: 0 }, { x: 0, opacity: 1, ease: Power2.easeOut });
            },
            'mouseleave': function(){
                TweenMax.set($(this).find('.character'), { opacity: 0 });
                TweenMax.to($(this).find('.bg'), 0.2, { opacity: 1 });
                TweenMax.fromTo($(this).find('strong'), 0.35, { scaleY: 0, x: 0, y: 0, opacity: 0, right: '50%', marginRight: -$(this).find('strong').width()/2 },{ scaleY: 1, opacity: 1, delay: 0.15, ease: Power2.easeOut });
            }
        }, ".list li:not('.end') a");
        $(document).on('.end a', 'click', function(e){
            e.preventDefault();
        });
    };
    return{
        init: function(){
            t1 = new TimelineMax(),
            t2 = new TimelineMax();

            set(Param);
            bindEvent();
        }
    }
})();