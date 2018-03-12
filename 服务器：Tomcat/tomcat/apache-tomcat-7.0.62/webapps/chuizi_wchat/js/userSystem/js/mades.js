$(function () {
    // 轮播
    lunbo(7);
    function userName() {
        var that = $("#uName");
        if (that.val().length <= 2) {
            that.siblings("p").show();
            return false
        } else {
            that.siblings("p").hide();
            return true
        }
    }
    function userPhone() {
        var that = $("#uPhone");
        if (/^\d{11}$/.test(that.val())) {
            that.siblings("p").hide();
            return true
        } else {
            that.siblings("p").show();
            return false
        }
    }
    function userQQ() {
        var that = $("#uQQ");
        console.log(typeof  that.val());
        if (/^[0-9]{6,13}$/.test(that.val())) {
            that.siblings("p").hide();
            return true
        } else {
            that.siblings("p").show();
            return false
        }
    }
    function userPro() {
        var that = $("#uPro");
        if (that.val() != "") {
            that.siblings("p").hide();
            return true
        } else {
            that.siblings("p").show();
            return false
        }
    }
    function mon() {
        var that=$("#mon");
        if (that.val().length!=1) {
            that.siblings("p").hide();
            console.log(that.val().length);
            return true

        } else {
            that.siblings("p").show();
            return false
        }
    }
    function userTxt() {
        var that = $("#uTxt");
        if (that.val().length > 20) {
            that.siblings("p").hide();
            return true
        } else {
            that.siblings("p").show();
            return false
        }
    }
    $(function () {
        $.ajax({
            url:urls+"/chuizi_wchat/system/sysType/list/json",
            type:"post",
            dataType:"json",
            data:{type:8},
            xhrFields: {
                withCredentials: true
            },
            success:function(data){
                var template = Handlebars.compile($("#yusuan script").html());
                $("#yusuan").html(template(data));
            },
            error:function (ero) {
                console.log(ero)
            }
        });

        $(".sub").click(function () {
            if(userName()&&userPhone()&&userQQ() && userPro()&&mon() && userTxt()){
                $.ajax({
                    url:urls+"/chuizi_wchat/system/customizationOrder/save/json",
                    type:"post",
                    dataType:"json",
                    xhrFields: {
                        withCredentials: true
                    },
                    data:{
                        name:$("#uName").val(),
                        phone:$("#uPhone").val(),
                        project:$("#uPro").val(),
                        content:$("#uTxt").val(),
                        qQnum:$("#uQQ").val(),
                        money:$("#mon").val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data.status=="success"){
                            alert("我们已经收到您的留言")
                        }
                    },
                    error:function (ero) {
                        console.log(ero)
                    }
                });
            }
        });
    })
});