$(function () {
    // 轮播
    lunbo(1);
    //微信小程序分类
    $.ajax({
        url:urls+"/chuizi_wchat/system/category/list/json",
        type:"get",
        dataType:"json",
        xhrFields: {
            withCredentials: true
        },
        data:{parentId:0},
        success:function(data){
            // console.log(data);
            var template = Handlebars.compile($(".wx-menu ul script").html());
            $(".wx-menu ul").html(template(data));
            //        菜单点击
            $(".wx-menu ul li").click(function () {
                window.open("wx-shoping-list.html?id="+$(this).data("index"))
            });
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    system(function (data) {
        console.log(data)
        $(".tell-foot span").html(data.data.linkPhone)
    })
    // 小程序功能特性
    others(1,function (data) {
        var template = Handlebars.compile($(".fun ul script").html());
        $(".fun ul").html(template(data));
        $(".fun-each").hover(function () {
            $(this).removeClass("icon-44444444444 ").addClass("icon-4444 hovers");
            $(this).find("span").css("display", "block")
        }, function () {
            $(this).removeClass(" icon-4444 hovers").addClass("icon-44444444444 ");
            $(this).find("span").hide()
        });
    });
    // 小程序可以解决那些问题
    others(2,function (data) {
        var template = Handlebars.compile($(".problem .w script").html());
        $(".problem .w").html(template(data));
    });
    // 小程序解决方案
    others(5,function (data) {
        var template = Handlebars.compile($(".plan-main ul script").html());
        $(".plan-main ul").html(template(data));
    });
    // 新闻接口
    $.ajax({
        url:urls+"/chuizi_wchat/system/news/list/json",
        type:"post",
        dataType:"json",
        data:{isRecommend:1},
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            // console.log(data);
            var template = Handlebars.compile($(".radio script").html());
            $(".radio").html(template(data));
            jQuery(".slideTxtBox").slide({
                mainCell: "div",
                autoPlay: true,
                effect: "topMarquee",
                vis: 1,
                interTime: 80,
                trigger: "click"
            });
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    // 小程序成功案例
    $.ajax({
        url:urls+"/chuizi_wchat/system/successful/list/json",
        type:"post",
        dataType:"json",
        data:{isRecommend:1},
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var template = Handlebars.compile($(".success script").html());
            $(".success").html(template(data));
            //        成功案例
            $(".success ul li").hover(function () {
                $(this).find("img").removeClass("gray").end().find(".black").show()
            }, function () {
                $(this).find("img").addClass("gray").end().find(".black").hide().find(".suc-top").show().siblings().hide()
            });
            $(".success .black .more").click(function () {
                $(this).parents(".suc-top").toggle().siblings().toggle();
            });
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    // 我们以跨互联网的嗅觉
    others(17,function (data) {
        // console.log(data);
        var template = Handlebars.compile($(".friend ul script").html());
        $(".friend ul").html(template(data));
    });
    // 小程序功能体系
    $.ajax({
        url:urls+"/chuizi_wchat/system/sysType/list/json",
        type:"get",
        dataType:"json",
        xhrFields: {
            withCredentials: true
        },
        data:{type:3},
        success:function(data){
            // console.log(data);
            var template = Handlebars.compile($(".tixi ul script").html());
            $(".tixi ul").html(template(data));
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    var myPlayer = videojs('videos');
    myPlayer.width(800);
    $(".cmd-vdo").click(function () {
        myPlayer.pause();
        $(".cmd-vdo").hide()
    });
    $(".clo-vdo").click(function () {
        myPlayer.pause();
        $(".cmd-vdo").hide()
    });
    myPlayer.on("ended", function () {
        $(".cmd-vdo").toggle();
    });
    $("#cmd-vdeo").click(function () {
        myPlayer.play();
        $(".cmd-vdo").toggle();
        $(".cmd-vdo video").on("ended", function () {
        });
    });
});
