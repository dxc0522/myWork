function userName() {
    var that =$("input[name='name']");
    if (that.val().length <= 2) {
        that.siblings("p").show();
        return false
    } else {
        that.siblings("p").hide();
        return true
    }
}
function userPhone() {
    var that =$("input[name='phone']");
    if (/^\d{11}$/.test(that.val())) {
        that.siblings("p").hide();
        return true
    } else {
        that.siblings("p").show();
        return false
    }
}
function userCom() {
    var that =$("input[name='companyName']");
    if (that.val() != "") {
        that.siblings("p").hide();
        return true
    } else {
        that.siblings("p").show();
        return false
    }
}
function userEmail() {
    var that =$("input[name='email']");
    if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(that.val())) {
        that.siblings("p").hide();
        return true
    } else {
        that.siblings("p").show();
        return false
    }
}
$(function () {
    // 轮播
    lunbo(4);
    // 全网推广方法
    others(6,function (data) {
        // console.log(data);
        var template = Handlebars.compile($(".ex-floor1-txt ul script").html());
        $(".ex-floor1-txt ul").html(template(data));
    });
    // 成功案例
    $.ajax({
        url:urls+"/chuizi_wchat/system/generalize/list/json",
        type:"post",
        dataType:"json",
        data:{pageSize:9},
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            // console.log(data);
            var template = Handlebars.compile($(".ex-floor2 .main-show script").html());
            $(".ex-floor2 .main-show").html(template(data));
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    // 合作模式
    others(7,function (data) {
        var template = Handlebars.compile($(".hz-show ul script").html());
        $(".hz-show ul").html(template(data));
    });
    // 新闻
    $.ajax({
        url:urls+"/chuizi_wchat/system/news/list/json",
        type:"post",
        dataType:"json",
        data:{
            isGeneralize:1
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            console.log(data);
            Handlebars.registerHelper('fullData', function(item) {
                var times=new　Date(item);
                var years=times.getFullYear();
                var mons=times.getMonth();
                var days=times.getDate();
                return years+"年"+mons+"月"+days+"日"
            });
            var template = Handlebars.compile($(".news-box script").html());
            $(".news-box").html(template(data));
        },
        error:function (ero) {
            // console.log(ero)
        }
    });
    // 提交
    $(".sub").on("click",function () {
        if(userName()&&userCom()&&userPhone()&&userEmail()){
            $.ajax({
                url:urls+"/chuizi_wchat/system/generalizeOrder/save/json",
                type:"post",
                dataType:"json",
                xhrFields: {
                    withCredentials: true
                },
                data:{
                    name:$("input[name='name']").val(),
                    phone:$("input[name='phone']").val(),
                    companyName:$("input[name='companyName']").val(),
                    email:$("input[name='email']").val()
                },
                success:function(data){
                    if(data.status=="success"){
                        alert(data.message)
                    }
                },
                error:function (ero) {
                    console.log(ero)
                }
            });
        }
    })
})