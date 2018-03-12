$(function () {
    $.ajax({
        url:urls+"/chuizi_wchat/system/template/look/json",
        type:"post",
        dataType:"json",
        xhrFields: {
            withCredentials: true
        },
        data:{id:GetQueryString("id")},
        success:function(data){
            console.log(data);
            // 轮播
            Handlebars.registerHelper('showImg', function(items, options) {
                // console.log(items,options);
                var imgs=items.split(";");
                imgs.pop();
                var out = '';
                for(var i=0, l=imgs.length; i<l; i++) {
                    var item = options.fn(imgs[i]);
                    out = out + '<img src="'+item+'" alt="'+options.data.root.data.name+'" title="'+options.data.root.data.name+'">';
                }
                return out ;
            });
            var templatel = Handlebars.compile($(".main-l  script").html());
            $(".main-l").html(templatel(data));
            var templatec = Handlebars.compile($(".main-c  script").html());
            $(".main-c").html(templatec(data));
            var templater = Handlebars.compile($(".main-r  script").html());
            $(".main-r").html(templater(data));
            var template1 = Handlebars.compile($("#vdo-show script").html());
            $("#vdo-show").html(template1(data));
            var template2 = Handlebars.compile($("#type-show script").html());
            $("#type-show").html(template2(data));
            $(".router a:last-of-type").html($(".main-c h3").html());
            //     联动切换
            function changes(num) {
                $(".goodsShow a:first").addClass("icon-icon_17-h");
                $(".goodsShow a:last").addClass("icon-icon_23-h");
                if (num == $(".changesImg ul li").length - 1) {
                    $(".goodsShow a:last").removeClass("icon-icon_23-h").addClass("icon-icon_23-g")
                } else if (num == 0) {
                    $(".goodsShow a:first").removeClass("icon-icon_17-h").addClass("icon-icon_17-g")
                }
                $(".looks >img").eq(num).show().siblings("img").hide();
                $(".changesImg ul li").eq(num).css("border-color", "#00a0e2").siblings().css("border-color", "transparent")
            }
//            经过事件
            $(".changesImg ul li").mouseover(function () {
                changes($(this).index());
            });
            function moveBox(numL) {
                $(".goodsShow .changesImg ul").css("left", "-" + 60 * numL + "px")
            }
//点击切换            //            点击事件
            $(".goodsShow a:first").click(function () {
                var num = $(".looks >img:visible").index() - 1;
                var numL = Math.round(Math.abs($(".changesImg ul").position().left / $(".changesImg ul li").outerWidth()));
                if (num == -1) {
                    num = $(".changesImg ul li").length - 1;
                    numL = num - 3;
                    moveBox(num - 4);
                } else if (numL > num) {
                    numL--;
                    moveBox(numL);
                }
                changes(num);
            });
            $(".goodsShow a:last").click(function () {
                var num = $(".looks >img:visible").index() + 1;
                var numL = Math.round(Math.abs($(".changesImg ul").position().left / $(".changesImg ul li").outerWidth()));
                if (num == $(".changesImg ul li").length) {
                    num = 0;
                    moveBox(0);
                } else if (numL + 4 < num) {
                    numL++;
                    moveBox(numL);
                }
                changes(num);
            });
//点击切换 end
            //    颜色
            var colors=[
                "#e20085",
                "#df00e2",
                "#6000e2",
                "#0070e2",
                "#00c5e2",
                "#00e2a5",
                "#1be200",
                "#b5e200"
            ];
            colors.forEach(function (item,index) {
                $(".colors ul").append("<li></li>").find("li:last-of-type").css("background",item);
                if(index==0){
                    $(".colors ul li:first-of-type").addClass("active")
                }
            });
            //    点击切换年限
            $(".years-each").click(function () {
                $(this).addClass("icon-years").siblings().removeClass("icon-years");
                $("#mny b").html($(this).data("num"))
            });
            $(".colors ul li").on("click",function () {
                $(this).addClass("active").siblings().removeClass("active")
            });
            // 购买按钮
            $(".now-buy").on("click",function () {
                userLogin(function (data) {
                    console.log(data);
                    console.log($(".icon-years").index(".years-each"))
                    if(data.status=="success"){
                        $('.blk').toggle();
                        $.ajax({
                            url: urls+"/chuizi_wchat/system/wxuser/list/json",
                            type: "post",
                            dataType: "json",
                            xhrFields: {
                                templateId: true
                            },
                            data: {
                                userId:data.data.id,
                                templateId:GetQueryString("id")
                            },
                            success: function (data) {
                                console.log(data);
                                var template = Handlebars.compile($("#ourList").html());
                                $(".our-list").html(template(data));
                                $(".our-sub").click(function () {
                                    window.location.href="buy.html?id="+GetQueryString("id")+"&&y="+($(".icon-years").index(".years-each")+1)
                                });
                            }
                        })
                    }else{
                        window.open("./login.html")
                    }
                })
            });
            // 视频播放
            var myPlayer1 = videojs('videos1');
            myPlayer1.width(550);
            var myPlayer2 = videojs('videos2');
            myPlayer2.width(550);
            // 版本说明
            $.ajax({
                url: urls+"/chuizi_wchat/system/templateversion/list/json",
                type: "post",
                dataType: "json",
                xhrFields: {
                    templateId: true
                },
                data: {templateId:data.data.id},
                success: function (data) {
                    // console.log(data);
                    var template = Handlebars.compile($("#ver script").html());
                    $("#ver").html(template(data));
                }
            });
            // 其他资费
            $.ajax({
                url: urls+"/chuizi_wchat/system/templatetariff/list/json",
                type: "post",
                dataType: "json",
                xhrFields: {
                    templateId: true
                },
                data: {templateId:data.data.id},
                success: function (data) {
                    // console.log(data);
                    var template = Handlebars.compile($("#mony script").html());
                    $("#mony").html(template(data));
                }
            });
            $(".but-use").click(function () {
                window.open("go-server.html")
            });

        }
    });
    // 轮播选项
    Handlebars.registerHelper('listImg', function(items, options) {
        // console.log(items,options);
        var imgs=items.split(";");
        imgs.pop();
        var out = '';
        for(var i=0, l=imgs.length; i<l; i++) {
            var item = options.fn(imgs[i]);
            out = out + '<li><img src="'+item+'"></li>';
        }
        return out ;
    });
    // 推荐的小程序
    recommend(2,function (data) {
        // console.log(data);
        var template = Handlebars.compile($(".ver-show .show-l script").html());
        // 轮播选项
        Handlebars.registerHelper('recomImg', function(items, options) {
           var imgs=items.split(";");
            imgs.pop();
            return imgs[0]
        });
        $(".ver-show .show-l").html(template(data));
    });
    $(".show-r-list li").click(function () {
        var that=$(this);
        that.addClass("active").siblings().removeClass("active");
        $(".show-r-main >ul >li").eq(that.index()).fadeIn("slow").siblings().fadeOut()
    });
});