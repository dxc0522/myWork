/**
 * appuser 页面使用javascript
 * @copyright {@link 9iu.org}
 * @author springrain<Auto generate>
 * @version  2017-03-21 14:42:38
 */


jQuery(document).ready(function(){
    //增加全选事件

});


function showCoupon(id){
	
	var index = layer.load(0, {    //0为加载样式  有 0  ，  1   2
		  shade: [0.1,'#fff'] //0.1透明度的白色背景
		});
	
	var list=" <table id=\"listDataTable\" border=\"1\" class=\"table table-striped table-bordered table-hover\" style=\"width: 800px\" ><thead><tr>" +
	"<th>有效天数</th><th id=\"th_phone\" >满多少</th><th>减多少</th><th>优惠券类型</th><th>状态</th><th>结束时间</th></tr></thead>" +
	"<tbody>";

	$.ajax({
	url:'/vincent/system/phone/usercoupon/list/json',
	data:{
		userId:id,
		pageSize:10000,
	},
	success:function(result){
		
		
		var data = result.data;
		
		for (var int = 0; int < data.length; int++) {
			
			console.log(data[int]);
			list = list + "<tr >";
			list = list + "<td >"+data[int].coupon.day+"</td>";
			list = list + "<td >"+data[int].coupon.limit+"</td>";
			list = list + "<td >"+data[int].coupon.cut+"</td>";
			if(data[int].coupon.type==1){
				list = list + "<td >通用</td>";
			}else if (data[int].coupon.type==2) {
				list = list + "<td >满减</td>";
			}
			if(data[int].status==1){
				list = list + "<td >未使用</td>";
			}else if (data[int].status==2) {
				list = list + "<td >已使用</td>";
			}else if (data[int].status==3) {
				list = list + "<td >已过期</td>";
			}
			list = list + "<td >"+data[int].endTime+"</td>";
			
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
			  area: ['800px', '300px'],
			  shadeClose: true, //开启遮罩关闭
			  content: list
		});
		
		layer.close(index);
	}
	});
		
}


