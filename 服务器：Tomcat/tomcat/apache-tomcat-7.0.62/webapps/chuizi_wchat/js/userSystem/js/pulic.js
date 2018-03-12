// url前缀
// var urls="http://api.yunqihui.net";
var urls="http://192.168.1.138";
// 设置cookie
function setCookie(name, value)
{
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if(expires!=null)
    {
        var LargeExpDate = new Date ();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
    }
    document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
}
// 获取cookie
function getCookie(Name)
{
    var search = Name + "="
    if(document.cookie.length > 0)
    {
        offset = document.cookie.indexOf(search)
        if(offset != -1)
        {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if(end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}
// 删除cookie
function deleteCookie(name)
{
    var expdate = new Date();
    expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
    setCookie(name, "", expdate);
}
// 获取链接
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

// 获取链接
function GetQueryFaString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = $("body", parent.document)[0].baseURI.split("?")[1].match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}


//搜索框
function selectInfo(url,selectId,queryBeanValue) {
	$.ajax({
		url : url,
		type : "get",
		success : function(result){
			//回选 下拉框
			var ht="<option value=''>全部</option>";
			for (var int = 0; int < result.data.length; int++) {
				ht+="<option value='"+result.data[int].id+"'>"+result.data[int].name+"</option>";
			}
			
			$("#"+selectId+"").html(ht);
			
			jQuery("#"+selectId+" option[value='"+queryBeanValue+"']").prop("selected",true);
		},
		error:function(XMLHttpRequest,textStatus,errorThrown){
			console.log(XMLHttpRequest);
			console.log(textStatus);
		}
	});
}







//跳转到案例参数设置
$("#caseHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qtmplrole/look/pre?menuId=8&miniBinId='+getCookie('miniBinId');
});

//跳转到案例分类
$("#casegoryHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qcasecategory/list?miniBinId='+getCookie('miniBinId');
});

//跳转到案例分类
$("#caseCategoryCancle").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qcasecategory/list?miniBinId='+getCookie('miniBinId');
});

//跳转到案例中心
$("#caseListHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/case/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到案例中心
$("#caseCommend").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qcasecommend/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到案例中心
$("#goodCommend").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qgoodcommend/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到案例中心
$("#caseCancle").click(function () {
	window.location.href='/chuizi_wchat/userSystem/case/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到产品中心
$("#goodsId").click(function () {
		window.location.href='/chuizi_wchat/userSystem/good/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到产品中心
$("#goodListCancle").click(function () {
		window.location.href='/chuizi_wchat/userSystem/good/list/pre?miniBinId='+getCookie('miniBinId');
});


//跳转到产品分类
$("#goodCategory").click(function () {
		window.location.href='/chuizi_wchat/userSystem/goodcategory/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到产品分类
$("#goodcategoryCancle").click(function () {
		window.location.href='/chuizi_wchat/userSystem/goodcategory/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到产品参数设置
$("#goodHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qtmplrole/look/pre?menuId=9&miniBinId='+getCookie('miniBinId');
});

//跳转到新闻分类
$("#qnewsCategory").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qnewscategory/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到新闻分类
$("#newsCategoryCancle").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qnewscategory/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到新闻中心
$("#qnewsId").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qnews/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到新闻中心
$("#newsCancle").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qnews/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到新闻参数设置
$("#qnewsHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qtmplrole/look/pre?menuId=10&miniBinId='+getCookie('miniBinId');
});

//跳转到咨询设置
$("#onlineSub").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qtmplrole/look/pre?menuId=18&miniBinId='+getCookie('miniBinId');
});

//跳转到咨询列表
$("#onlineList").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qonlinesub/list/pre?miniBinId='+getCookie('miniBinId');
});

//在线提交未处理
$("#qonlinesubHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qonlinesub/list/pre?isLook=0&miniBinId='+getCookie('miniBinId');
});

//在线提交已处理
$("#qonlinesubSuccHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qonlinesub/list/pre?isLook=1&miniBinId='+getCookie('miniBinId');
});

//跳转到在线客服设置
$("#onlineService").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qtmplrole/look/pre?menuId=21&miniBinId='+getCookie('miniBinId');
});

//跳转到在线客服列表
$("#onlineServiceList").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qonlineservice/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到在线客服列表
$("#onlineServiceCancel").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qonlineservice/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到轮播设置
$("#lunboHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qtmplrole/look/pre?menuId=6&miniBinId='+getCookie('miniBinId');
});
//跳转到轮播列表
$("#lunboList").click(function () {
		window.location.href='/chuizi_wchat/userSystem/lunbo/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到轮播列表
$("#lunboCancel").click(function () {
		window.location.href='/chuizi_wchat/userSystem/lunbo/list/pre?miniBinId='+getCookie('miniBinId');
});


//跳转到轮播设置
$(".lunboAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/lunbo/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
	
		window.location.href=url;
});
//跳转到分销详情
$("#distributionLookHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/mini/distribution/pre?id='+getCookie('miniBinId');
});


//跳转到体现列表
$("#whthdrawListHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qwithdraw/list/pre?status=0&miniBinId='+getCookie('miniBinId');
});

//跳转到体现成功列表
$("#whthdrawListHtmlSucc").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qwithdraw/list/pre?status=1&miniBinId='+getCookie('miniBinId');
});

//跳转到体现失败列表
$("#whthdrawListHtmlFail").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qwithdraw/list/pre?status=2&miniBinId='+getCookie('miniBinId');
});


//跳转到分销列表
$("#distributionListHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qmoneydetail/list/pre?type=4&miniBinId='+getCookie('miniBinId');

});


//跳转到充值列表
$(".rechargeListHtml").click(function () {
		window.location.href='/chuizi_wchat/userSystem/qrecharge/list/pre?miniBinId='+getCookie('miniBinId');

});

//跳转到充值编辑
$(".rechargeAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/qrecharge/update/pre?miniBinId='+getCookie('miniBinId');
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
	
		window.location.href=url;
});

//跳转到充值编辑
$(".qenvironmentCategoryAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/qenvironmentcategory/update/pre?miniBinId='+getCookie('miniBinId');
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
		window.location.href=url;
});

//跳转到产品新增
$(".goodListAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/good/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
	
		window.location.href=url;
});

//跳转到产品分类新增
$(".goodCategoryAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/goodcategory/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
		window.location.href=url;
});

//跳转到新闻新增新增
$(".newsListAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/qnews/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
		window.location.href=url;
});


//跳转到新闻新增新增
$(".newsCategoryAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/qnewscategory/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
		window.location.href=url;
});

//跳转到案例新增
$(".caseListAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/case/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
		window.location.href=url;
});

//跳转到案例分类新增
$(".caseCategoryAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/qcasecategory/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}

		window.location.href=url;
});
//跳转到客服新增
$(".onlineServiceAddHtml").click(function () {
	
	var url='/chuizi_wchat/userSystem/qonlineservice/save/pre?miniBindId='+getCookie('miniBinId');
	
	if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
		url=url+"&id="+$(this).attr("updateItemId");
	}
	
	window.location.href=url;
});

//跳转到环境分类新增
$("#qenvironmentcategoryHtml").click(function () {
	
	window.location.href='/chuizi_wchat/userSystem/qenvironmentcategory/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到环境相册新增
$("#qenvironmentHtml").click(function () {
	
	window.location.href='/chuizi_wchat/userSystem/qenvironment/list/pre?miniBinId='+getCookie('miniBinId');
});

//基础设置
$("#miniHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/mini/look?id='+getCookie('miniBinId');
});

//基础配套设置
$("#miniPeitaoHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qmorecomplete/updateHtml/pre?miniBinId='+getCookie('miniBinId');
});


//基础配套设置
$(".orderHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qorder/list/pre?miniBinId='+getCookie('miniBinId')+'&status='+$(this).attr("status");
});


//跳转到充值编辑
$(".qenvironmentAddHtml").click(function () {
		var url='/chuizi_wchat/userSystem/qenvironment/updateHtml/pre?miniBinId='+getCookie('miniBinId');
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
		window.location.href=url;
});

//跳转到用户编辑
$(".userUpdateHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/qwxuser/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
	
		window.location.href=url;
});

//跳转到用户列表
$("#userUpdateCancle").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qwxuser/list/pre?miniBinId='+getCookie('miniBinId');
});

//跳转到产品优惠券列表
$("#goodCardHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qgoodcard/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到用户优惠券列表
$("#userCardHtml").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qusercard/list/pre?miniBinId='+getCookie('miniBinId');
});


//跳转到产品优惠券新增
$(".goodCardAddHtml").click(function () {
	
		var url='/chuizi_wchat/userSystem/qgoodcard/save/pre?miniBindId='+getCookie('miniBinId');
		
		if(undefined!=$(this).attr("updateItemId")&&null!=$(this).attr("updateItemId")){
			url=url+"&id="+$(this).attr("updateItemId");
		}
	
		window.location.href=url;
});

//跳转到产品优惠券列表
$("#goodCardCancle").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qgoodcard/list/pre?miniBinId='+getCookie('miniBinId');
});


//跳转到环境相册列表
$("#environmentCancle").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qenvironment/list/pre?miniBinId='+getCookie('miniBinId');
});
//跳转到环境相册分类列表
$("#environmentCategoryCancle").click(function () {
	window.location.href='/chuizi_wchat/userSystem/qenvironmentcategory/list/pre?miniBinId='+getCookie('miniBinId');
});









