$(document).ready(function() {
    $('#main').css('overflow', 'hidden');
    $('button')
        .css('width', 0)
        .css('opacity', 0)
    $('#navigation').css("height", "0");
    $('#logotxt').css('font-size', '0');


    $('#bg').animate({ opacity: '0.4' }, 1500);
    $('#navigation')
        .animate({ width: '100vw' }, 800, )
        .animate({ height: '60px' }, function() {
            $('#logotxt').animate({ 'font-size': '30px' })
        });
    $('#logo')
        .animate({ width: '60px' })
        .animate({ height: '60px' }, 1000, function() {
            $('#main')
                .animate({
                    opacity: '0.2'
                })
                .animate({ opacity: '1' }, function() {
                    $('button').animate({
                        'opacity': '1',
                        'width': '100%'
                    })

                })
        });

});