var indexApp = {
    //入口方法
    init: function (valueJson) {
        this.valueJson = valueJson; //获取前台页面传入的参数
        this.wheelInit(); //一些样式的初始化 如圆形的高度设置等
        this.resize(); //onresize 事件 重置样式
        this.cancel($('.false')); //注册取消按钮的点击事件
        this.cancel($('.close'));//注册再来一次按钮的点击事件
        return this; //返回对象本身,使其可以链式调用
    },
    //转盘初始化
    wheelInit: function () {
        var t = this;
        t.valueJson['wheelBody'].css('height', t.valueJson['wheelBody'].css('width'));
        t.valueJson['wheelSmall'].css('height', t.valueJson['wheelSmall'].css('width'));
        t.showStars(); //某几个小圆点高亮
    },
    //窗口改变时的重新设置样式
    resize: function () {
        var t = this;
        $(window).resize(function () {
            t.wheelInit();//窗口发生变化的时候重置样式
        });
    },
    //计算并且排列小圆点
    showStars: function () {
        var t = this;
        for (var i = 0; i < t.valueJson['starsNum']; i++) {
            var oStar = document.createElement('div');

            if (i % 2 == 0) { //奇数的圆点增加高亮的效果(外阴影)
                oStar.style.boxShadow = '0 0 5px #fff';
            }
            oStar.className = 'stars';
            oStar.style.left = t.valueJson['starsPostion'][i][0] + '%';
            oStar.style.top = t.valueJson['starsPostion'][i][1] + '%';
            t.valueJson['wheelBody'].append(oStar);

        }
    },
    //取消按钮事件绑定
    cancel: function (obj) {
        obj.click(function () {
            $(this).parents('.dialog').css('display', 'none');
        });
    },
    connectWebViewJavascriptBridge:function(callback) {
        if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function () {
                callback(WebViewJavascriptBridge)
            }, false)
        }
    },
    //转盘开始的初始化函数 以及点击事件 通过链式调用加载 而非init()初始化加载,这样做,当未开始或者已结束页面不需要转动的时候,不链式调用此方法就行
    wheelStart: function () {
        var t = this;
        t.nowRan = 0; //当前弧度
        t.once = true; //是否第一次
        t.onStart = true; //是否开始了转动

        //点击事件
        t.valueJson['startBtn'].click(appsend);
        function appsend() {
            data = '{"type":28,"subtype":"123","itemid":"400-927800","name":"123"}'
            t.connectWebViewJavascriptBridge(function (bridge) {
                // /!* Init your app here *!/
                bridge.init(function (message, responseCallback) {
                    // alert('Received message------>: ' + message)
                    // var res = JSON.parse(message);
                    tell(message.signCode,message.userId);
                    if (responseCallback) {
                        responseCallback("Right back atcha")
                    }
                })

                bridge.send(data)
            })
            // android.appsend(data)
            // tell("NIFplAThB1zSOVy6coG7Z6GPhBuVdL+fMxVGROUyRsb6GeDde0/FBj2Ch6y/ pZbNOfgzD9uHsVCHWD0eDKOo0Cfr7tnUOpev/rRFtNkTcK/i/lE1nx+2na9g GuFZWIqB6Xdg1NICv0e3cqvaAVsG1Zr7BhboNjYQPzDyeq+6vvEWXIMptx5Q 2hCwhQ5CKBNQZsh9OaWlY+hJ9IhVl8f+NmkABJmYUIyU59taYvcyIKa5zeVx 8X8Rah9H/4h6ahnmwp8gfkY+2fDTyrCgLXb1giFzkRtS08O2ue0OkQ2mjORb 0JnAI3HLrvkdTJml1QGAF4HvmvpJFkmEeQp8vg5grA==",224);

        }
    },

    //转盘转动具体算法
    showWheel: function (data) {
        var t = this;
        //需要转动的值 等与当前值 + 默认转动7200度 + 后台计算传过来的度数
        var ra = t.nowRan + t.valueJson['actionRan'] + data['ran'];

        //第一次的话 弧度要加上每一块弧度的一半
        if (t.once) {
            t.once = false;
            ra = ra + (data['onceran'] / 2)
        }

        //注意指针 和 转盘 反方向转动 来达到 指针 不动的效果
        t.valueJson['wheelBody'].css('webkitTransform', 'rotate(' + ra + 'deg)');
        t.valueJson['startBtn'].css('webkitTransform', 'rotate(' + (-ra) + 'deg)');

        //重新获取当前的度数
        t.nowRan = ra;

        //转盘转动需要4S  这里 4.5S 后 执行 各种弹出提示信息框的事件
        setTimeout(function () {
            t.showDialog(data);
            t.onStart = true;
        }, 4500);
    },

    //根据各种不同的参数 显示弹出层的提示框
    showDialog: function (data) {
        var t = this;

        if (data['actionStatus'] == 1) {  //值为1 表示 抽取到了现金红包
            t.deduct(data); //扣除次数;
            t.dialog($('.theForm'), data); //获得奖品的 提示信息框
        }
    },

    //扣除次数的相关操作  次数的 参数 也是ajax 后台传递过来
    deduct: function (data) {
        $('.g-num').find('em').html(data['num']);
    },

    //弹出层
    dialog: function (obj, data) {
        // alert(obj,data)
        if (data) { //关注 再来一次  谢谢参与  系统异常 都是执行此处
            obj.find('.d-main p').html(data['message']);
        }
        //打开弹出层
        obj.css('display', 'block');

    }

}