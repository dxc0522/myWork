lunbo(7)

$(function () {
    $(".slideTxtBox .hd ul li").click(function () {
        switch ($(this).data("index")){
            case 1:
                console.log($(this).data("index"));

                break;
            case 2:
                console.log($(this).data("index"));

                break;
            case 3:
                console.log($(this).data("index"));
                others(8,function (data) {
                    var that=$(".license");
                    if(that.children().is("script")) {
                        var template = Handlebars.compile($(".license script").html());
                        that.html(template(data));
                    }
                });
                break;
            case 4:
                console.log($(this).data("index"));
                others(9,function (data) {
                    var that=$(".office");
                    if(that.children().is("script")) {
                        var template = Handlebars.compile($(".office script").html());
                        that.html(template(data));
                    }

                });
                break;
            case 5:
                console.log($(this).data("index"));
                others(10,function (data) {
                    var that=$(".cmp-history");
                    if(that.children().is("script")){
                        var template = Handlebars.compile($(".cmp-history script").html());
                        that.html(template(data));
                    }
                });
                break;
            case 6:
                console.log($(this).data("index"));

                break;
            case 7:
                console.log($(this).data("index"));
                others(11,function (data) {
                    var that=$("#worker");
                    if(that.children().is("script")){
                        var template = Handlebars.compile($("#worker script").html());
                        that.html(template(data));
                    }
                });
                break;
            case 8:
                console.log($(this).data("index"));
                if($("#sk .sk").children().is("script")){
                    $.ajax({
                        url: urls+"/chuizi_wchat/system/payBank/list/json",
                        type: "get",
                        dataType: "json",
                        xhrFields: {
                            withCredentials: true
                        },
                        success:function (data) {
                            var template = Handlebars.compile($("#sk script").html());
                            $("#sk .sk").html(template(data));
                        },
                        error:function (ero) {
                            console.log(ero)
                        }
                    });
                }
                break;
            case 9:
                console.log($(this).data("index"));
                //        售后工单
                if(!$(".shouhou").children().is("iframe")){
                    $(".shouhou").html("<iframe src='./viewAbout/9.html'></iframe>");
                }
                break;
        }
    });
    if(GetQueryString("id")){
        if(GetQueryString("id")==9){
            $(".shouhou").html("<iframe src='./viewAbout/9.html'></iframe>");
        }
        jQuery(".slideTxtBox").slide({trigger: "click",defaultIndex:GetQueryString("id")-1});
    }else{
        jQuery(".slideTxtBox").slide({trigger: "click"});

    }




})