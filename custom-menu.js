$(function () {
    
    $(".header-toggle").click(function(){
        $(".mainmenu").addClass("open");
        $("body").addClass("overlay");
    });
    
    $(".closeMenu").click(function(){
        $(".mainmenu").removeClass("open");
        $("body").removeClass("overlay");
    });
    
    var $ul = $('.mainmenu > nav > ul');

    $ul.find('li a').click(function (e) {
        var $li = $(this).parent();

        if ($li.find('ul').length > 0) {
            e.preventDefault();

            if ($li.hasClass('selected')) {
                $li.removeClass('selected').find('li').removeClass('selected');
                $li.find('ul').slideUp(400);
                $li.find('a em').removeClass('flip-v');
            } else {

                if ($li.parents('li.selected').length == 0) {
                    $ul.find('li').removeClass('selected');
                    $ul.find('ul').slideUp(400);
                    $ul.find('li a em').removeClass('flip-v');
                } else {
                    $li.parent().find('li').removeClass('selected');
                    $li.parent().find('> li ul').slideUp(400);
                    $li.parent().find('> li a em').removeClass('flip-v');
                }

                $li.addClass('selected');
                $li.find('>ul').slideDown(400);
                $li.find('>a>em').addClass('flip-v');
            }
        }
    });


    $('.mainmenu > nav > ul ul').each(function (i) {
        if ($(this).find('>li>ul').length > 0) {
            var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
            var pIntPLeft = parseInt(paddingLeft);
            var result = pIntPLeft + 20;

            $(this).find('>li>a').css('padding-left', result);
        } else {
            var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
            var pIntPLeft = parseInt(paddingLeft);
            var result = pIntPLeft + 20;

            $(this).find('>li>a').css('padding-left', result).parent().addClass('selected--last');
        }
    });

    var t = ' li > ul ';
    $('.mainmenu > nav > ul > li > ul').addClass('subMenu');

    var activeLi = $('li.selected');
    if (activeLi.length) {
        opener(activeLi);
    }

    function opener(li) {
        var ul = li.closest('ul');
        if (ul.length) {

            li.addClass('selected');
            ul.addClass('open');
            li.find('>a>em').addClass('flip-v');

            if (ul.closest('li').length) {
                opener(ul.closest('li'));
            } else {
                return false;
            }

        }
    }

});
