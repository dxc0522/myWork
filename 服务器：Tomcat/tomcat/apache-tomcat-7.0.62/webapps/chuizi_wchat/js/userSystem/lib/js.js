$(function () {
    //1.楼梯什么时候显示，800px scroll--->scrollTop
    var $scroll;
    $(window).on('scroll', function () {
        $scroll = $(this).scrollTop();
        //4.拖动滚轮，对应的楼梯样式进行匹配
        $('.louti').each(function () {
            var $loutitop = $('.louti').eq($(this).index()).offset().top + 400;
            //console.log($loutitop);
            if ($loutitop > $scroll) {//楼层的top大于滚动条的距离
                $('#loutinav li').removeClass('active');
                $('#loutinav li').eq($(this).index()).addClass('active');
                return false;//中断循环
            }
        });
    });
    //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
    var $loutili = $('#loutinav li').not('.last');
    $loutili.on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var $loutitop = $('.louti').eq($(this).index()).offset().top;
        //获取每个楼梯的offsetTop值
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop: $loutitop
        });
    });
    $(window).resize(
        function () {
            moves()
        }
    );
    function moves() {
        if ($(window).width() < 1500) {
            $("#loutinav").hide();
            $(".min-louti").show();
            $(".tell-top").siblings().hide();
            $(".tell-r").addClass("tell-r-min").css("right",0);
            $(".stairs").css("left",0);
        } else {
            $("#loutinav").show();
            $(".min-louti").hide();
            $(".tell-top").siblings().show();
            $(".tell-r").removeClass("tell-r-min").css("right",($(window).width()-1500)/4+"px");
            $(".stairs").css("left",($(window).width()-1500)/4+"px");
        }
/*        if($(window).width()<=1500){
            $(".stairs").css("left",0);
            $(".tell-r").css("right",0);
        }else{
            $(".stairs").css("left",($(window).width()-1500)/4+"px");
            $(".tell-r").css("right",($(window).width()-1500)/4+"px");
        }*/
    }
    moves();
    $(".close-lou").click(function () {
        $("#loutinav").hide();
        $(".min-louti").show();
    });
    $(".min-louti").click(function () {
        $("#loutinav").show();
        $(".min-louti").hide();
    });
    $(".close-r").click(function () {
        $(".tell-top").siblings().hide();
        $(".tell-r").addClass("tell-r-min")
    });
    $(".tell-top").click(function () {
        $(".tell-r").removeClass("tell-r-min");
        $(this).siblings().show()
    })
});