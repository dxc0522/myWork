/**
 * Micheal   javascript 封装
 * 图片空间插件，用于单图上传或多图上传
 *
 */
(function (This) {


    This.pathName = window.document.location.pathname ,
        /**
		 * 项目根
          */
	This.path = pathName.substring(0,pathName.substr(1).indexOf('/')+1),

	This.imageUtil = {


		name : "image",
        src : This.path + "/images/auto.png" ,
		url : "/adminFileUpload" ,

        /**
		 * 单张上传图片控件
         * @param id 装载控件的容器id（必传）
         * @param name 隐藏域input的name以及id名称(同时也是提交表单的key)，默认：image
         * @param src 默认展示的图片url,默认：path/images/auto.png
         * @param url 上传图片的服务端路径，不需带根,默认接口:"/adminFileUpload"
         */
    	initImage : function (id,name,src,url) {

    		var inputSrc = "" ;
            if (id == undefined || id == "") {
                alert("请设置id");
                return ;
            }
            $('#' + id + '').empty() ;

            //将用户自定义的names覆盖默认的
            if (name == undefined || name == null ){
                name = this.name ;
            }

            if (src == undefined || src == null || src == ''){
                src = this.src ;
            }else {
            	inputSrc = src ;
			}
            if (url == undefined || url == null || src == ''){
                url =  this.url ;
            }

            var model = "<img name='"+ name + "I' id='"+ name + "I'  style='height: 150px;width: 150px;' onclick='imageUtilClickImg(\""+id+"\");' src='"+ src + "' >";
            model += "<input type='file' id='filed' name='filed' style='display:none'>" ;
            model += "<input name='"+ name + "' id='"+ name +"' value='"+inputSrc+"' style='display:none'  type='text' />" ;
            $('#' + id + '').html(model);


            //该容器内的file图片改变监听
            $('#' + id + '').on("change", "#filed", function() {

			   $.ajaxFileUpload({
				   url : This.path + url,
				   secureuri : false,
				   fileElementId : 'filed',
				   dataType : 'text',
				   data : {},
				   success : function(data, status) {

					   jQuery("#"+name+"I").attr('src',data);
                       $('#' + id + '').find("#"+name+"").attr('value',data);
				   },
				   error : function(data, status, e) {
					   alert("上传出错");
				   }
			   })

			   return false;
		   });

        },

        /**
		 * 多张上传图片控件
         * @param id 装载控件的容器id（必传）
         * @param name 隐藏域input的name以及id名称(同时也是提交表单的key)，默认：image
         * @param src 默认展示的图片url，多图url以“；”分割,默认：path/images/auto.png
         * @param url 上传图片的服务端路径，不需带根,默认接口:"/adminFileUpload"
         */
		initImages : function (id,name,src,url) {
            var inputSrc = "" ;
            var initSrc =[] ;
            if (id == undefined || id == "") {
                alert("请设置id");
                return ;
            }
            $('#' + id + '').empty() ;

            //将用户自定义的names覆盖默认的
            if (name == undefined || name == null ){
                name = this.name ;
            }
            if (src == undefined || src == null || src == ''){
                src = this.src ;
                initSrc[0] = this.src ;
            }else {
                inputSrc = src ;
                if (src.lastIndexOf(';') == src.length-1){  //截取最后一个；
                    src = src.substr(0,src.length-1) ;
                }
                initSrc = src.split(';') ;
            }
            if (url == undefined || url == null || src == ''){
                url =  this.url ;
            }

            //先定义第一个的模板
            var baseModel = "<div class='clearfix'> " +
                                "<ul class='addPromise_photo promise'  id='addPgod' style='width:97%;overflow:hidden;margin:0 auto;margin-top:8px;margin-left:38px'> " +
                                    "<input type='file' id='"+ Math.uuid() +"' class='filedImgs' name='filed' style='display:none'>  " +
                                    "<input name='" + name + "' class='col-xs-12 col-sm-6 imagesVal'  id='" + name + "' style='display:none'  type='text' value='"+inputSrc+"' /> " +
                                    "<div id='add_promise_div'> </div>" +
                                    "<div> " +
                                        "<span class='add_promise_li' div='add_promise_div' style='font-size:80px;color:#949494;font-family:-webkit-body;'>+</span><br/> " +
                                        "<span >点击添加</span>" +
                                    "</div>" +
                                " </ul> " +
                            "</div>" ;
            //先装填基本模板
            $('#' + id + '').html(baseModel);
            //定义循环模板
            var model =  "<li class='addgoods_photo_a' style='float:left;width:100px;height:150px;border:1px solid #e6e6e6;padding:5px 16px 0px 16px;margin-right:20px'> " +
                            "<div class='move_Box' style='width:40px;'></div>" +
                            "<div class='addgoods_photo_img'> <img  class='photoImgsVal' src='"+ this.src + "' ></div> " +
                            "<ul class='addgoods_photo_button'> " +
                                "<li>" +
                                    "<div class='layui-btn layui-btn-primary layui-btn-mini promise_edit' photo_no='1' style='float: left;width:46px;height:25px;line-height:25px;font-size:12px;margin-left: -8px;'>上传</div> " +
                                "</li> " +
                                "<li class='button_float promise_deleteBt'><div class='layui-btn layui-btn-primary layui-btn-mini promise_delete' photo_no='1' style='float: left;width:46px;height:25px;line-height:25px;font-size:12px;background:#ccc;margin-left: -12px;'>删除</div></li> " +
                            "</ul>" +
                          "</li>";

            for (var srcLength = 0 ; srcLength < initSrc.length ; srcLength ++){
                $('#' + id + '').find("#add_promise_div").append(model) ;
                var imgs = $('#' + id + '').find("img") ;
                $(imgs[imgs.length-1]).attr('src',initSrc[srcLength]) ;
            }

            //点击添加一个框，并没有什么逻辑
            $('#' + id + '').on("click",".add_promise_li", function() {
                $('#' + id + '').find("#add_promise_div").append(model) ;
            });

            //点击删除一个框，并没有什么逻辑
            $('#' + id + '').on("click",".promise_deleteBt", function() {
                var delSrc=$(this).parent().prev().find("img").attr('src');
                //去掉input中的待删除src
                if (delSrc != src){
                    var value=$('#' + id + '').find("#"+name).val().replace(src+';','');
                    $($(this).parent().parent().prev()).val(value);
                }
                //删除元素
                $(this).parent().parent().remove();

            });

            //"上传"按钮的点击监听
            $('#' + id + '').on("click",".promise_edit", function() {
                //清除原有的标记
                var wait=$('#' + id + '').find("[name='waitAdd']");
                if(wait.length>0){
                    for (var int = 0; int < wait.length; int++) {
                        $(wait[int]).attr('name','');
                    }
                }

                //给该点击img区域一个标记
                var li = $(this).parents()[2] ;
                $(li).find("img").attr('name','waitAdd');
                //唤醒上传文件选择框
                $('#' + id + '').find(".filedImgs").click();

            });

            //上传文件
            $('#' + id + '').unbind("change").on("change",".filedImgs", function() {

                var fiedId=$(this).attr("id");

                $.ajaxFileUpload({
                    url : This.path + url,
                    secureuri : false,
                    fileElementId : fiedId,
                    dataType : 'text',
                    data : {},
                    success : function(data, status) {
                        var wait=$('#' + id + '').find("[name='waitAdd']");
                        //替换原有的src
                        if(wait.length>0){
                            var newSrc=$(wait[0]).attr('src');
                            if(newSrc!=undefined || newSrc!="" || newSrc != src){

                                var value=$('#'+fiedId+'').next().val().replace(newSrc+';','');
                                $('#'+fiedId+'').next().val(value);
                            }
                        }
                        wait.attr('src',data) ;
                        $('#' + id + '').find('#'+fiedId+'').next().val($('#'+fiedId+'').next().val()+data+';');
                    },
                    error : function(data, status, e) {
                        console.log(data);
                        alert('上传出错');
                    }
                })

                return false;

            });
        }
	}

})(window);

/**
 * 点击图片唤醒文件上传弹框
 */
function imageUtilClickImg(id) {
    $('#' + id + '').find("#filed").click() ;
}

/**
 * 点击看大图
 * @param s
 * @param width
 * @param height
 */
function checkImg(s,width,height){
    var me="<img style=\"height:"+height+";width:"+width+";\" alt=\"\" src=\""+s+"\">";
    var a = s;
    if(a != ""){
        //iframe层-多媒体
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: width,
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content:me
        });
        layer.msg('点击任意处关闭');
    }else{
        myalert('暂无图片')
    }
}
