/**
 * appuser 页面使用javascript
 * @copyright {@link 9iu.org}
 * @author springrain<Auto generate>
 * @version  2017-03-21 14:42:38
 */


jQuery(document).ready(function(){
    //增加全选事件

});


function check(){
	
	$.ajax({
		url : '/chuizi_wchat/system/syssysparam/look/json?code=preAuthCode',
		type : "post",
		dataType : "json",
		success : function(result){
			
			if(result.status=="error"){
				window.location.href="/mts/appWeb/appuser/appuserLogin.jsp";
				return;
			}
			
			if(result.data!=undefined){
				
				window.location.href="https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=wx8415eca24fb523cd&pre_auth_code="+result.data.value+"&redirect_uri=http://api.yunqihui.net/chuizi_wchat/system/wx/authorizationCode/json";
				
			}
			
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest) ;
			console.log(textStatus) ;
		}
	});
	
}


