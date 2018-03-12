$(function () {
    // 轮播
    lunbo(9);
    // 更改信息
    function reday(data) {
        var template = Handlebars.compile($("#tpl").html());
        $("#newsMain").html(template(data));
    }
    // 页码
    function pages(page,code) {
        $("#pagination1").pagination({
            currentPage: page.pageIndex,// 当前页数
            totalPage: page.pageSize,// 总页数
            isShow: true,// 是否显示首尾页
            count:5,// 显示个数
            homePageText: "第一页",// 首页文本
            endPageText: "最后一页",// 尾页文本
            prevPageText: "<",// 上一页文本
            nextPageText: ">",// 下一页文本
            callback: function (index) {
                newsDeg($(".news-list ul li.on").data("index"),index);
            }
        });
    }
    // 新闻分类
    $.ajax({
        url:urls+"/chuizi_wchat/system/newsCategory/list/json",
        type:"get",
        dataType:"json",
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            // console.log(data);
            var template = Handlebars.compile($(".news-list ul script").html());
            $(".news-list ul").html(template(data));
            $(".news-list ul li").on("click",function () {
                var that = $(this);
                that.addClass("on").siblings().removeClass("on");
                $("h2").html(that.html());
                newsDeg(that.data("index"))
            });
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    // 新闻详情
    function newsDeg(code,num) {
        // console.log(code);
        $.ajax({
            url:urls+"/chuizi_wchat/system/news/list/json",
            type:"get",
            dataType:"json",
            data:{pageSize:5,categoryId:code,pageIndex:num},
            xhrFields: {
                withCredentials: true
            },
            success:function(data){
                // console.log(data);
                pages(data.page,code);
                reday(data)
            },
            error:function (ero) {
                // console.log(ero)
            }
        });
    }
    newsDeg(1,1);
    $("body").click(function () {
        $(".show-msg-each").on("click",function () {
            window.open("news-msg.html?id="+$(this).data("index"));
        })
    })

});