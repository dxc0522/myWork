function myalert(message,fun){
	 if(fun){
		// bootbox.alert(message,fun);
			layer.alert(message, {icon: 1},fun);
	 }else{
			layer.alert(message, {icon: 1});
	 }
}

function myerror(message,fun){
	layer.alert(message, {icon: 5},fun);
}

function myinfo(message,fun){
	layer.alert(message, {icon: 0},fun);
}

function myquestion(message,fun){
	layer.alert(message, {icon: 3},fun);
}

function mywarning(message,fun){
	layer.alert(message, {icon: 2},fun);
}

function myconfirm(message,fun){
/*	
		 bootbox.confirm(message,function(result){
			 if(result&&fun){
				 fun();
			 }
			
		 });
*/
	
	layer.confirm(message, {
		  btn: ['确定','取消'] //按钮
		}, function(){
			fun();
		}, function(){
			
		});
		 
		 
		 
}

function myprompt(message,fun){
	
	/*
	 bootbox.prompt(message,function(result){
		 if(fun){
			 fun(result);
		 }
		
	 });
	 */
	
	layer.prompt({
		  title: message,
		  formType: 1 //prompt风格，支持0-2
		}, function(pass){
			fun(pass);
		});
	 
	
}

/**
 * 有一个文本输入框的提示窗
 * @param message  提示文字
 * @param _url  要请求的url
 * @param _paras url请求参数，可以为null
 * @param textKey  拼接url后文本框value值的key
 * @param redirect  请求成功后跳转的url
 */
function mypromptajax(message,_url,_paras,textKey,_redirect) {
    layer.prompt({
        title: message,
        formType: 0 //prompt风格，支持0-2
    }, function(text,index){
        if(!_url)return;
        if (!_paras){
            _paras = {} ;
        }
        _paras[textKey] = text ;

        jQuery.ajax({
            url:_url,
            type:"post",
            data:_paras,
            dataType:"json",
            async:false,
            success:function(data){
                if(data!=null&&"success"==data.status){
                    layer.msg(data.message==null?'成功':data.message, {
                        icon: 1,
                        time: 3000 //2秒关闭（如果不配置，默认是3秒）
                    }, function(){
                        if(_redirect){
                            myhref(_redirect) ;
                        }else{
                            window.location.reload() ;
                        }
                    });
                }else{
                    layer.msg(data.message, {icon: 1,time: 1000});
                }
            }
        });
        layer.close(index);
    });
}














