$(document).ready(function(){


    $('.glass img').hover(
        function(){
            var classid = $(this).attr('class');
            $(`.${classid} h3`).fadeIn(200);
            $(this).css({opacity:0.4});
        }, function(){
            var classid = $(this).attr('class');
            $(`.${classid} h3`).fadeOut(200);
            $(this).css({opacity:1});
    });

});
