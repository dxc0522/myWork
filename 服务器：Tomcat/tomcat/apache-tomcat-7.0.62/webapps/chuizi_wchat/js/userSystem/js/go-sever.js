$(function () {
    userLogin(function (user) {
        if(user.status=="success"){
            console.log(user);
            // 初始化页面
            function reday(user,name) {
                $.ajax({
                    url:urls+"/chuizi_wchat/system/wxuser/list/json",
                    type:"post",
                    dataType:"json",
                    xhrFields: {
                        withCredentials: true
                    },
                    data:{userId:user.data.id,nick_name:name},
                    success:function(data){
                        // console.log(data);
                        var template = Handlebars.compile($("#mode").html());
                        $(".setting-main").html(template(data));
                        $(".Unbind").on("click",function () {
                            $(".Unbind-box").show().data("id",$(this).parents("tr").data("id"));
                            console.log($(".Unbind-box").data("id"))
                        });
                        $(".trans").on("click",function () {
                            $(".trans-box").show().data("id",$(this).parents("tr").data("id"));
                        })
                    },error:function (err) {
                        console.log(err)
                    }
                });
            }
            reday(user);
            // 检索小程序名字
            $(".seach-wx b").on("click",function () {
                var that=$(".seach-wx input");
                if(that.val()!=""){
                    reday(user,that.val())
                }
            });
            codes($(".Unbind-box button"),4,user);
            codes($(".trans-box button"),3,user);
        }else{
            window.location.href="login.html"
        }
    });
    // 发送验证码
    function codes(obj,num,user) {
        // 发送验证码
        obj.on("click",function () {
            var that = $(this);
//            重复发送验证码
            var dats = 59;
            var t = setInterval(function () {
                codeTime()
            }, 1000);
            function codeTime() {
                that.html(dats + "s").addClass("active").attr("disabled", "true");
                if (dats <= 0) {
                    clearInterval(t);
                    that.html("获得验证码").removeClass("active").removeAttr("disabled");
                }
                dats--;
            }
            codeTime();
            $.ajax({
                url: urls+"/chuizi_wchat/system/sms/send/json",
                type: "post",
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                },
                data: {phone:user.data.phone, type: num},
                success: function (data) {
                    console.log(data.data.content);
                },
                error: function (ero) {
                    console.log(ero)
                }
            });
        });
    }
    // 取消绑定
    $(".Unbind-box .sub").on("click",function () {
        var thatVal=$(".Unbind-box input").val();
        if(/^\d{4,}$/.test(thatVal)){
            $.ajax({
                url:urls+"/chuizi_wchat/system/wxuser/fail/json",
                type:"post",
                dataType:"json",
                xhrFields: {
                    withCredentials: true
                },
                data:{id:$(".Unbind-box").data("id"),content:thatVal},
                success:function(data){
                    console.log(data);
                    if(data.status=="success"){
                        window.location.href="./go-server.html";
                    }
                }
            })
        }
    });
    // 迁移
    $(".trans-box .sub").on("click",function () {
        var thatVal=$(".trans-box .oper-code input").val();
        console.log($(".trans-box").data("id"),thatVal,$(".trans-box .oper-main >input").val());
        if(/^\d{4,}$/.test(thatVal)){
            $.ajax({
                url:urls+"/chuizi_wchat/system/wxuser/migration/json",
                type:"post",
                dataType:"json",
                xhrFields: {
                    withCredentials: true
                },
                data:{id:$(".trans-box").data("id"),code:thatVal,phone:$(".trans-box .oper-main >input").val()},
                success:function(data){
                    console.log(data);
                    if(data.status=="success"){
                        window.location.href="./go-server.html";
                    }
                }
            })
        }
    })
})