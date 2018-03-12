/**
 * technician 页面使用javascript
 * @copyright {@link 9iu.org}
 * @author springrain<Auto generate>
 * @version  2017-04-08 10:53:23
 */


jQuery(document).ready(function(){
    //增加全选事件

});


function showOrderGood(id){
	
	var index = layer.load(0, {    //0为加载样式  有 0  ，  1   2
		  shade: [0.1,'#fff'] //0.1透明度的白色背景
		});
	
	var list=" <table id=\"listDataTable\" border=\"1\" class=\"table table-striped table-bordered table-hover\" style=\"width: 850px\" ><thead><tr>" +
	"<th>商品名称</th><th>商品图片</th><th>型号名称</th><th>单价</th><th>机身编号</th></tr></thead>" +
	"<tbody>";

	$.ajax({
	url:'/vincent/system/ordergood/list/json',
	data:{
		orderId:id,
		pageSize:10000,
	},
	success:function(result){
		
		
		var data = result.data;
		
		for (var int = 0; int < data.length; int++) {
			
			console.log(data[int]);
			list = list + "<tr >";
			list = list + "<td >"+data[int].goodName+"</td>";
			list = list + "<td ><img class=\"sim\"  height=\"120px\" width=\"120px\" alt=\"\" src=\""+data[int].goodIcon+"\" onclick=\"checkImg('${(_data.image)!''}','600px','600px');\" ></td>";
			list = list + "<td >"+data[int].standardName+"</td>";
			list = list + "<td >"+data[int].price+"</td>";
			list = list + "<td ><input type=\"text\" name='sub' jsonStr='{\"orderId\":"+data[int].orderId+",\"goodId\":"+data[int].goodId+",\"standardId\":"+data[int].standardId+"' /></td>";
			list = list + "</tr >";
			
			var sellnum = data[int].sellNum;
			
			for (var int2 = 0; int2 < sellnum - 1; int2++) {
				list = list + "<tr >";
				list = list + "<td >"+data[int].goodName+"</td>";
				list = list + "<td ><img class=\"sim\"  height=\"120px\" width=\"120px\" alt=\"\" src=\""+data[int].goodIcon+"\" onclick=\"checkImg('${(_data.image)!''}','600px','600px');\" ></td>";
				list = list + "<td >"+data[int].standardName+"</td>";
				list = list + "<td >"+data[int].price+"</td>";
				list = list + "<td ><input type=\"text\" name='sub' jsonStr='{\"orderId\":"+data[int].orderId+",\"goodId\":"+data[int].goodId+",\"standardId\":"+data[int].standardId+"' /></td>";
				list = list + "</tr >";
			}
			
		}
		list = list + "</tbody></table>";
		
		
		list = list + "<div class=\"form-group\"><label class=\"control-label col-xs-12 col-sm-3 no-padding-right\" for=\"deliverType\" >交货方式</label><div class=\"col-xs-12 col-sm-9\"><div class=\"clearfix\"><select name=\"deliverType\" onchange='changeType();' id=\"deliverType\"><option value=\"1\">物流</option><option value=\"2\">专车</option><option value=\"3\">网点自提</option></select></div><div class=\"help-block\" for=\"type\"></div></div></div>";
		
		list = list + "<div class=\"form-group deliverType1\"><label class=\"control-label col-xs-12 col-sm-3 no-padding-right\" for=\"logisticsCompany\" >物流公司</label><div class=\"col-xs-12 col-sm-9\"><div class=\"clearfix\"><select name=\"logisticsCompany\" id=\"logisticsCompany\"></select></div><div class=\"help-block\" for=\"type\"></div></div></div>";
		
		list = list + '<div class="form-group deliverType1"><label class="control-label col-xs-12 col-sm-3 no-padding-right" for="logisticsCode" >物流编号</label><div class="col-xs-12 col-sm-9"><div class="clearfix"><input name="logisticsCode" class="col-xs-12 col-sm-6" id="logisticsCode" type="text" /></div><div class="help-block" for="logisticsCode"></div></div></div>';
		
		list = list + "<div class=\"form-group deliverType2\" ><label class=\"control-label col-xs-12 col-sm-3 no-padding-right\" for=\"carType\" >汽车类型</label><div class=\"col-xs-12 col-sm-9\"><div class=\"clearfix\"><select name=\"carType\" id=\"carType\"></select></div><div class=\"help-block\" for=\"type\"></div></div></div>";
		
		list = list + '<div class="form-group deliverType2" class=\"\"><label class="control-label col-xs-12 col-sm-3 no-padding-right" for="plateNum" >车牌号</label><div class="col-xs-12 col-sm-9"><div class="clearfix"><input name="plateNum" class="col-xs-12 col-sm-6" id="plateNum" type="text" /></div><div class="help-block" for="plateNum"></div></div></div>';
		
		list = list + '<div class="form-group deliverType2" class=\"deliverType2\"><label class="control-label col-xs-12 col-sm-3 no-padding-right" for="driverName" >司机姓名</label><div class="col-xs-12 col-sm-9"><div class="clearfix"><input name="driverName" class="col-xs-12 col-sm-6" id="driverName" type="text" /></div><div class="help-block" for="driverName"></div></div></div>';
		
		list = list + '<div class="form-group deliverType2" class=\"deliverType2\"><label class="control-label col-xs-12 col-sm-3 no-padding-right" for="driverPhone" >司机电话</label><div class="col-xs-12 col-sm-9"><div class="clearfix"><input name="driverPhone" class="col-xs-12 col-sm-6" id="driverPhone" type="text" /></div><div class="help-block" for="driverPhone"></div></div></div>';
		
		
		list = list + "<div class=\"wizard-actions\"><button class=\"btn btn-success btn-info\" data-last=\"Finish\" onclick=\"subOrderGood("+id+");\"  style=\"float:left;margin-left:45.4%;\">保存</button></div>";
		
		layer.close(index);
		layer.open({
			  type: 1,
			  skin: 'layui-layer-demo', //样式类名
			  closeBtn: 1, //显示关闭按钮
			  anim: 2,
			  id:'layerOpen',
			  resize :false,
			  area: ['860px', '400px'],
			  shadeClose: false, //开启遮罩关闭
			  content: list
		});
		
		
		$('.deliverType2').hide();
		
		
		$.ajax({
			url:'/vincent/system/cartype/list/json',
			data:{
				pageSize:10000,
			},
			success:function(result){
			var data = result.data;
			var carList = '' ;
			for (var int = 0; int < data.length; int++) {
				carList = carList + '<option value=\"'+data[int].name+'\">'+data[int].name+'</option>';
			}
			$('#carType').html(carList);
			}
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
		
		
	}
	});
		
}

function subOrderGood(id){
	
	var machineCode= '';
	
	var subInput=document.getElementsByName("sub");
	
	for (var int = 0; int < subInput.length; int++) {
		machineCode = machineCode + $(subInput[int]).attr('jsonStr');
		
		if($(subInput[int]).val()!=''){
			if(int!=subInput.length-1){
				machineCode = machineCode  + ",\"machineCode\":\"" +  $(subInput[int]).val() + "\"},";
			}else{
				machineCode = machineCode  + ",\"machineCode\":\"" +  $(subInput[int]).val() + "\"}";
			}
			
		}else {
			myalert("请填写机身编号");
			return;
		}
		
	}
	
	machineCode = "["+machineCode+"]";
	
	$.ajax({
		url:'/vincent/system/order/check/deliver',
		data:{
			id:id,
			machineCode:machineCode,
			logisticsCompany:$('#logisticsCompany').val(),
			logisticsCode:$('#logisticsCode').val(),
			carType:$('#carType').val(),
			plateNum:$('#plateNum').val(),
			driverName:$('#driverName').val(),
			driverPhone:$('#driverPhone').val(),
			deliverType:$('#deliverType').val(),
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
	myhref('/vincent/system/order/list');
}

function changeType(){
	
	var deliverType=$("#deliverType").val();
		switch (deliverType) {
		case "1":
			$(".deliverType2").hide();
			$(".deliverType1").show();
			break;
		case "2":
			$(".deliverType1").hide();
			$(".deliverType2").show();
			break;
		case "3":
			$(".deliverType1").hide();
			$(".deliverType2").hide();
			break;
		default :
			$(".deliverType2").hide();
			$(".deliverType1").show();
			break;
		}
	}








function showMachineCode(id){
	
	var index = layer.load(0, {    //0为加载样式  有 0  ，  1   2
		  shade: [0.1,'#fff'] //0.1透明度的白色背景
		});
	
	var list=" <table id=\"listDataTable\" border=\"1\" class=\"table table-striped table-bordered table-hover\" style=\"width: 850px\" ><thead><tr>" +
	"<th>商品名称</th><th>型号名称</th><th>机身编号</th><th>二维码</th></tr></thead>" +
	"<tbody>";

	$.ajax({
	url:'/vincent/system/machinecode/list/json',
	data:{
		orderId:id,
		pageSize:10000,
	},
	success:function(result){
		
		
		var data = result.data;
		
		for (var int = 0; int < data.length; int++) {
			
			console.log(data[int]);
			list = list + "<tr >";
			list = list + "<td >"+data[int].goodName+"</td>";
			list = list + "<td >"+data[int].standardName+"</td>";
			list = list + "<td >"+data[int].machineCode+"</td>";
			list = list + "<td ><img class=\"sim\"  height=\"120px\" width=\"120px\" alt=\"\" src=\""+data[int].image+"\" onclick=\"checkImg('${(_data.image)!''}','600px','600px');\" ></td>";
			list = list + "</tr >";
			
		}
		list = list + "</tbody></table>";
		
		layer.open({
			  type: 1,
			  skin: 'layui-layer-demo', //样式类名
			  closeBtn: 1, //显示关闭按钮
			  anim: 2,
			  id:'layerOpen',
			  resize :false,
			  area: ['860px', '400px'],
			  shadeClose: false, //开启遮罩关闭
			  content: list
		});
		
		layer.close(index);
	}
	});
		
}








