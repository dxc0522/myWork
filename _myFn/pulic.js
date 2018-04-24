// url前缀
var urls = "https://api.yunqihui.net";
// 设置cookie
function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}

// 获取cookie
function getCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}

// 删除cookie
function deleteCookie(name) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
    setCookie(name, "", expdate);
}

// 获取自定义链接字符
function GetMyString(name, str) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = str.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

// 获取己链接
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

// 获取父链接
function GetQueryFatherString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = $("body", parent.document)[0].baseURI.split("?")[1].match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

// 校验名字
function checkName(data) {
    var checkFn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
    return checkFn.test(data) && data.length <= 4 && data.length > 1
}

// 验证手机号码
function checkPhone(data) {
    var mobile = /^[1][3,4,5,7,8][0-9]{9}$/;
    return mobile.test(data);
}

// 校验手机号码或座机
function checkTell(data) {
    var phone = /^[1][3,4,5,7,8][0-9]{9}$/, mobile = /^0\d{2,3}-?\d{7,8}$/;
    return mobile.test(data) || phone.test(data);
}

// 校验邮箱
function checkEamil(data) {
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return myreg.test(data)
}

// 校验密码
function checkPwd(data) {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/.test(data)
}

// 系统参数
function system(fn) {
    if (typeof(Storage) !== "undefined") {
        var yqhData = sessionStorage.getItem("yqhData");
        if (yqhData != null) {
            fn(JSON.parse(yqhData))
        } else {
            $.ajax({
                url: urls + "/chuizi_wchat/system/syssysparam/list/json",
                type: "get",
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    // console.log(data)
                    fn(data)
                    sessionStorage.setItem("yqhData", JSON.stringify(data))
                },
                error: function (ero) {
                    console.log(ero)
                }
            });
        }
    }
}

// 系统参数杂项
function systemOther(pushData, fn) {
    $.ajax({
        url: urls + "/chuizi_wchat/system/sysType/list/json",
        type: "get",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: pushData,
        success: function (data) {
            fn(data)
        },
        error: function (ero) {
            // console.log(ero)
        }
    });
}

// 删除换行符、字符串、空格
function initString(str) {
    var resultStr = str.replace(/[\r\n]/g, ""); //去掉回车换行
    resultStr = str.replace(/(^\s*)|(\s*$)/g, ""); //去掉空格
    return resultStr;
}

// 新建窗口
function openwin(fn) {
    var newPage = window.open("about:blank");
    window.focus();
    fn(function (type, url) {
        if (type) {
            newPage.location = url;
        } else {
            var browserName = navigator.appName;
            if (browserName == "Netscape") {
                newPage.open('', '_parent', '');
                newPage.close();
            } else if (browserName == "Microsoft Internet Explorer") {
                newPage.opener = "whocares";
                newPage.close();
            }
        }
    });
}

// 无刷新更改url
function changeURL(data) {
    window.history.pushState({}, 0, 'http://' + window.location.host + '/' + data);
}

// 返回顶部
function backTop(fn) {
    $('body,html').animate({scrollTop: 0}, 500);
    if (fn) {
        setTimeout(function () {
            fn()
        }, 500)
    }
}

if (typeof (Handlebars) != "undefined") {
// 自加一
    Handlebars.registerHelper('fullSize', function (item) {
        return item + 1
    });
// 判断
    Handlebars.registerHelper('compare', function (left, operator, right, options) {
        if (arguments.length < 3) {
            throw new Error('Handlerbars Helper "compare" needs 2 parameters');
        }
        var operators = {
            '==': function (l, r) {
                return l == r;
            },
            '===': function (l, r) {
                return l === r;
            },
            '!=': function (l, r) {
                return l != r;
            },
            '!==': function (l, r) {
                return l !== r;
            },
            '<': function (l, r) {
                return l < r;
            },
            '>': function (l, r) {
                return l > r;
            },
            '<=': function (l, r) {
                return l <= r;
            },
            '>=': function (l, r) {
                return l >= r;
            },
            'typeof': function (l, r) {
                return typeof l == r;
            }
        };

        if (!operators[operator]) {
            throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
        }

        var result = operators[operator](left, right);

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
// 时间
    Handlebars.registerHelper('fullData', function (item) {
        var times = new Date(item);
        var years = times.getFullYear();
        var mons = times.getMonth() + 1;
        var days = times.getDate();
        return years + "年" + mons + "月" + days + "日"
    });
// 详细时间
    Handlebars.registerHelper('fullDataMsg', function (item) {
        var times = new Date(item);
        var years = times.getFullYear();
        var mons = times.getMonth() + 1;
        var days = times.getDate();
        var hours = times.getHours();
        var minut = times.getMinutes();
        return years + "年" + mons + "月" + days + "日" + hours + "时" + minut + "分"
    });
// 轮播首页
    Handlebars.registerHelper('fullImg', function (item) {
        if (item != undefined) {
            item = item.split(";");
            return item[0]
        }
    });
// 模版查看人数
    Handlebars.registerHelper('fullNum', function (item) {
        return this.lookCardinalNum + this.lookNum
    });
// 拆分分号
    Handlebars.registerHelper('fullLabel', function (item) {
        if (item != undefined) {
            item = item.split(";");
            var pushData = "";
            for (var i in item) {
                if (item[i] != "") {
                    pushData += "<span>" + item[i] + "</span>"
                }
            }
            return item
        }
    });
}

// 刷新页面
function updataPage() {
    self.location.reload();
}

function openLogin() {
    window.location.href = "./login.html?backUrl=" + self.location.pathname.slice(1)
}

// 自定义弹窗插件
$.fn.extend({
    warnInit: function () {
        this.append('<div onclick="javascript:$(this).hide()" id="warn_box" class="warn_bg_box"><div class="warn_txt_box cen" onclick=\'javascript:event.stopImmediatePropagation()\'><div class="warn_txt_top">温馨提示<img style="cursor: pointer" src="./img/close_icon.png" class="close_btn" alt="" onclick="javascript:$(this).parents(\'.bg_box\').hide()"></div><div class="warn_txt_main"></div><div class="diy_box"></div><div class="btn_box"><div class="btn_fn " style="text-align: center"><div class="btn_res btn_each">确定</div><div class="btn_err btn_each">取消</div></div></div></div></div>\t');
        return this
    }, warnShow: function (data) {
        var that = $("#warn_box").show();
        if ("msg" in data) {
            that.find(".warn_txt_main").html(data.msg)
        } else {
            that.find(".warn_txt_main").html("")
        }
        if ("iframBox" in data) {
            that.find(".diy_box").html(data.iframBox)
        } else {
            that.find(".diy_box").html("")
        }
        if ("res" in data) {
            that.find(".btn_res").css("display", "inline-block").click(function () {
                data.res()
            })
        } else {
            that.find(".btn_res").hide()
        }
        if ("err" in data) {
            that.find(".btn_err").css("display", "inline-block").click(function () {
                that.hide();
                data.err()
            })
        } else {
            that.find(".btn_err").hide()
        }
    }
});

// 初始化页面数据
$(function () {
    // 自定义下拉框
    $(document).click(function () {
        $(".diy_select_box").removeClass("active")
    }).on("click",".diy_select_box",function (e) {
        $(this).toggleClass("active")
        e.stopPropagation();
    }).on("click",".diy_select_box >ul >li",function () {
        var that = $(this);
        that.parents(".diy_select_box").find("button").val(that.val()).find("span").html(that.html())
    })
    // 自定义下拉框 end
})
