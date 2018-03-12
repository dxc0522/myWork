
$(function () {
    lunbo(8)
    $.ajax({
        url: urls+"/chuizi_wchat/system/operationSchool/list/json",
        type: "post",
        dataType: "json",
        data: {categoryType: 1, pageSize: 8},
        success: function (data) {
            console.log(data);
            if (data.length == 0) {
                $("#zhdp").remove();
                return
            }
            Handlebars.registerHelper('fullData', function (item) {
                var times = new Date(item);
                var years = times.getFullYear();
                var mons = times.getMonth();
                var days = times.getDate();
                return years + "年" + mons + "月" + days + "日"
            });
            var template = Handlebars.compile($("#zhdp").html());
            $("#zhdp-box").html(template(data));
            $(".class-main ul li").click(function () {
                var that = this;
                window.open("play-video.html?id="+that.id)
            });
        },
        error: function (ero) {
            // console.log(ero)
        }
    });
    // 微信营销
    $.ajax({
        url: urls+"/chuizi_wchat/system/operationSchool/list/json",
        type: "post",
        dataType: "json",
        data: {categoryType: 2, pageSize: 24},
        success: function (data) {
            var template = Handlebars.compile($("#wxyx").html());
            $("#wxyx-box").html(template(data));
            jQuery(".sell-main .banner").slide({
                titCell: ".hd ul",
                mainCell: ">ul", autoPage: true,trigger:"click", effect: "leftLoop", vis: 4,scroll:4
            });
        },
        error: function (ero) {
            // console.log(ero)
        }
    });
    // 推荐的小程序
    recommend(5,function (data) {
        console.log(data)
        var template = Handlebars.compile($(".mores ul script").html());
        $(".mores ul").html(template(data));
    });
//    效果js

})