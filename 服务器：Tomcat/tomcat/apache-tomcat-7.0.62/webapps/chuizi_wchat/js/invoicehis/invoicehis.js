/**
 * technician 页面使用javascript
 * @copyright {@link 9iu.org}
 * @author springrain<Auto generate>
 * @version  2017-04-08 10:53:23
 */


jQuery(document).ready(function(){
    //增加全选事件
});


function send(id){
	
	var index = layer.load(0, {    //0为加载样式  有 0  ，  1   2
		  shade: [0.1,'#fff'] //0.1透明度的白色背景
		});
	
	var list="";
		
		
		list = list + "<div class=\"form-group deliverType1\"><label class=\"control-label col-xs-12 col-sm-3 no-padding-right\" for=\"logisticsCompany\" >物流公司</label><div class=\"col-xs-12 col-sm-9\"><div class=\"clearfix\"><select name=\"logisticsCompany\" id=\"logisticsCompany\"></select></div><div class=\"help-block\" for=\"type\"></div></div></div>";
		
		list = list + '<div class="form-group deliverType1"><label class="control-label col-xs-12 col-sm-3 no-padding-right" for="logisticsCode" >物流编号</label><div class="col-xs-12 col-sm-9"><div class="clearfix"><input name="logisticsCode" class="col-xs-12 col-sm-6" id="logisticsCode" type="text" /></div><div class="help-block" for="logisticsCode"></div></div></div>';
		
		list = list + "<div class=\"wizard-actions\"><button class=\"btn btn-success btn-info\" data-last=\"Finish\" onclick=\"sendPiao("+id+");\"  style=\"float:left;margin-left:45.4%;\">保存</button></div>";
		
		layer.open({
			  type: 1,
			  skin: 'layui-layer-demo', //样式类名
			  closeBtn: 1, //显示关闭按钮
			  anim: 2,
			  id:'layerOpen',
			  resize :false,
			  area: ['600px', '190px'],
			  shadeClose: false, //开启遮罩关闭
			  content: list
		});
		
		
		$.ajax({
			url:'/vincent/system/logistics/list/json',
			data:{
				pageSize:10000,
			},
			success:function(result){
			var data = result.data;
			var logisticsCompanyList = '' ;
			for (var int = 0; int < data.length; int++) {
				logisticsCompanyList = logisticsCompanyList + '<option value=\"'+data[int].name+'\">'+data[int].name+'</option>';
			}
			$('#logisticsCompany').html(logisticsCompanyList);
			}
		});
		
		layer.close(index);
		
}

function sendPiao(id){
	
	$.ajax({
		url:'/vincent/system/invoicehis/send',
		data:{
			id:id,
			logisticsName:$('#logisticsCompany').val(),
			logisticsCode:$('#logisticsCode').val(),
		},
		success:function(result){
			
			if(result.status=='success'){
				myconfirm(result.message,open());
			}else {
				myalert(result.message);
			}
		}
		});
}

function open(){
	myhref('/vincent/system/invoicehis/list');
}
