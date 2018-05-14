function mapFn(data) {
    this.content = data.content;//外围box
    this.boxs = data.boxs;//canvas对象
    this.obj = data.boxs.getContext("2d");//画布对象
    this.imgs = data.imgs;//img对象
    this.mapScal = data.mapScal;//每次的变化大小
    this.getData = data.mapData.map(function (item) {
        item.coords = item.coords.split(",").map(function (list) {
            return parseInt(list)
        });
        return item
    });//data数据
    var that = this;//this
    var mapScal = 1;//当前缩放比例
    var size = 1;//img宽高比例
    var nowData = data.mapData;//当前数据
    var placeData = {//拖动数据
        x: 0,//按下的x坐标
        y: 0,//按下的y坐标
        moveX: 0,//移动到的x坐标
        moveY: 0,//移动到的y坐标
        domX: 0,//元素坐标x
        domY: 0,//元素坐标y
        mapcontent: false,//是否在画布内
        mapClick: false,//是否点击
    }
    // 添加图片
    data.imgs.onload = function () {
        size = data.imgs.height / data.imgs.width;
        data.boxs.width = data.content.clientWidth;
        data.boxs.height = data.content.clientWidth * size;
        that.readyMap()
    }
    // 初始化画布事件
    that.readyMap = function () {
        that.obj.fillStyle = data.color;
        that.obj.drawImage(that.imgs, 0, 0, data.boxs.width, data.boxs.height);
        var dataScale = that.content.clientWidth / 1200;
        nowData = [];
        that.getData.forEach(function (item, index) {
            nowData[index] = {};
            var mathData = [];
            item.coords.forEach(function (num) {
                mathData.push(num * mapScal * dataScale)
            })
            nowData[index] = {
                coords: mathData,
                id: item.id,
                content_id: item.content_id
            }
            that.obj.beginPath();
            that.obj.moveTo(mathData[0], mathData[1])
            for (var i = 1; i < mathData.length / 2; i++) {
                that.obj.lineTo(mathData[i * 2], mathData[i * 2 + 1])
            }
            that.obj.fill();
            that.obj.closePath();
        })
    }
    // 点击区块事件
    // 获取坐标位置
    function getSite(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();
        return {
            x: x - bbox.left * (canvas.width / bbox.width),
            y: y - bbox.top * (canvas.height / bbox.height)
        };
    }
    // 重构图形
    function againMake(x, y) {
        for (var i in nowData) {
            that.obj.beginPath();
            that.obj.moveTo(nowData[i].coords[0], nowData[i].coords[1])
            for (var o = 1; o < nowData[i].coords.length / 2; o++) {
                that.obj.lineTo(nowData[i].coords[o * 2], nowData[i].coords[o * 2 + 1])
            }
            that.obj.closePath();
            if (that.obj.isPointInPath(x, y)) {
                return nowData[i].id
            }
        }
        return false
    }
    // 点击事件
    this.boxs.addEventListener("click", function (e) {
        var loc = getSite(this, e.clientX, e.clientY);
        data.back(againMake(loc.x, loc.y), e)
        e.preventDefault()
    }, false)
    // 滚动事件
    $(data.boxs).on("mouseenter  mouseover", function () {
        placeData.mapcontent = true;
    }).on("mouseleave mouseout", function () {
        placeData.mapcontent = false;
    }).on("mousewheel", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        if (delta > 0) {
            mapScal = floatAdd(mapScal, data.mapScal)
            // 计算宽高是否超出
            if (data.content.clientWidth * mapScal <= data.imgs.width) {
                data.boxs.width = data.content.clientWidth * mapScal;
                data.boxs.height = data.content.clientWidth * mapScal * size;
                placeData.domX *= (1 + data.mapScal);
                placeData.domY *= (1 + data.mapScal);
            } else {
                mapScal = floatSub(mapScal, data.mapScal)
                data.boxs.width = data.imgs.width;
                data.boxs.height = data.imgs.height;
            }
        } else if (delta < 0) {
            mapScal = floatSub(mapScal, data.mapScal);
            if (mapScal > 1) {
                data.boxs.width = data.content.clientWidth * mapScal;
                data.boxs.height = data.content.clientWidth * mapScal * size;
                placeData.domX *= (1 - data.mapScal);
                placeData.domY *= (1 - data.mapScal);
            } else {
                mapScal = 1;
                data.boxs.width = data.content.clientWidth;
                data.boxs.height = data.content.clientWidth * size;
                placeData.domX = 0;
                placeData.domY = 0;
            }
        }
        that.boxs.style.left = placeData.domX + "px";
        that.boxs.style.top = placeData.domY + "px";
        console.log(placeData.domX, placeData.domY)
        that.readyMap()
    }).on("mousedown", function (e) {
        placeData.mapClick = true;
        placeData.x = e.offsetX;
        placeData.y = e.offsetY;
    }).on("mouseup", function () {
        placeData.mapClick = false;
    }).on("mousemove", function (e) {
        $(".model").remove()
        // 拖动事件
        if (placeData.mapcontent && placeData.mapClick) {
            placeData.moveX = e.offsetX - placeData.x;
            placeData.moveY = e.offsetY - placeData.y;
            placeData.domX += placeData.moveX;
            placeData.domY += placeData.moveY;
            if (placeData.domX < that.content.clientWidth - that.boxs.width) {
                placeData.domX = that.content.clientWidth - that.boxs.width
            } else if (placeData.domX >= 0) {
                placeData.domX = 0
            }
            if (placeData.domY < that.content.clientHeight - that.boxs.height) {
                placeData.domY = that.content.clientHeight - that.boxs.height
            } else if (placeData.domY >= 0) {
                placeData.domY = 0
            }
            that.boxs.style.left = placeData.domX + "px";
            that.boxs.style.top = placeData.domY + "px";
        }
        placeData.x = e.offsetX;
        placeData.y = e.offsetY;
    })
    //加    
    function floatAdd(arg1, arg2) {
        var r1, r2, m;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    }
    //减    
    function floatSub(arg1, arg2) {
        var r1, r2, m, n;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        //动态控制精度长度    
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
}
$(window).resize(function () {
    self.location.reload()
})