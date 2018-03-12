
$(function () {
    $.ajax({
        url:urls+"/chuizi_wchat/system/category/listAll/json",
        type:"get",
        dataType:"json",
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            // console.log(data);
            var template = Handlebars.compile($(".shoping-l  script").html());
            $(".shoping-l ").html(template(data));
            $(".shoping-l ul >li h3").click(function () {
                $(this).parent().toggleClass("active")
            });
            $(".shoping-l ul >li >ol >li").on("click",function () {
                $(".shoping-main").data("code",$(this).data("index"));
                var route=$(".router");
                if(!route.children().is("#nowType")){
                    route.append("<a id='nowType'>"+$(this).html()+"</a>");
                }else{
                    route.find("#nowType").html($(this).html())
                }
                ready($(".shoping-main").data("code"));
            })
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    function ready(code,fliter,index,serch,types) {
        $.ajax({
            url:urls+"/chuizi_wchat/system/template/list/json",
            type:"get",
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            data:{
                categoryId:code,/*分类ID*/
                status:types,/*状态*/
                sorts:fliter,/*排序*/
                selectKey:serch,/*关键字搜索*/
                pageSize:20,/*个数*/
                pageIndex:index/*当前页*/
            },
            success:function(data){
                console.log(data);
                var template = Handlebars.compile($(".shoping-main  script").html());
                $(".shoping-main ul").html(template(data));
                //        页面懒加载
                $("img.lazy").lazyload({
                    effect: "fadeIn"
                });
                $(".shop-top-list span label").html(data.page.totalCount);
                //        页码
                $("#pagination1").pagination({
                    currentPage:data.page.pageIndex,// 当前页数
                    totalPage: data.page.pageCount,// 总页数
                    count: 5,// 显示个数
                    callback: function (num) {
                        ready($(".shoping-main").data("code"),$(".shop-top-list b.active").data("index"),num);
                    }
                });
            },
            error:function (ero) {
                console.log(ero)
            }
        });
    }
    if(GetQueryString("id")){
        ready(GetQueryString("id"));
    }else{
        ready()
    }
    var typeList=["开发中即将上线","预售中","已上线","已下架"];
    // 模版状态
    Handlebars.registerHelper('fullType', function (item) {
        item=typeList[item];
        return item
    });

    $("#allList").on("click",function () {
        $(this).next().remove();
       ready()
    });
    $(".shop-top-seach").on("click",function () {
        ready(0,0,0,$(this).find("input").val());
    });
//    筛选按钮
    $(".shop-top-list b").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        ready($(".shoping-main").data("code"),$(".shop-top-list b.active").data("index"))
    });
    $("#alerMore").click(function () {
        $(this).toggleClass("active");
        $(".shoping-l").toggleClass("move");
        $(".shoping-r").toggleClass("move")
    })
});