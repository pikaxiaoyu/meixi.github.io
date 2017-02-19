var oPhone_Email = document.getElementById('phone_email');
var oError = document.getElementById('error');
var reg_pe = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
//验证邮箱和手机号
	oPhone_Email.onblur = function(){
		if(oPhone_Email.value == ''){
			oPhone_Email.style.border = '1px solid #8E0C3A';
			oError.innerHTML = '请输入您的手机号或常用邮箱。'; 		
		}else if(!reg_pe.test(oPhone_Email.value)){
			oPhone_Email.style.border = '1px solid #8E0C3A';
			oError.innerHTML = '请输入正确的邮箱或手机号。';          
		}else{
			oPhone_Email.style.border="";
			oError.innerHTML = '';
		}
	}
//验证密码
var oPassword = document.getElementById('psw');
var reg_psw = /^[0-9a-zA-Z]{6,16}$/;
		oPassword.onblur = function(){
		   if(oPassword.value ==''){
		   	oPassword.style.border = '1px solid #8E0C3A';
		   	oError.innerHTML = '密码不能为空，请输入密码。';
		   }else if(!reg_psw.test(oPassword.value)){
		   	oPassword.style.border = '1px solid #8E0C3A';
		   	oError.innerHTML = '用户密码长度范围在6~16位之间。';		   	
		   }else{
			oPassword.style.border = '';
			oError.innerHTML = '';		   	
		   }
		}
//确认上次密码
var oConfirm = document.getElementById('confirm_psw');
         oConfirm.onblur = function(){
         	if(oConfirm.value == ""){
 		   	oConfirm.style.border = '1px solid #8E0C3A';
		   	oError.innerHTML = '请重新输入一次上面的密码。';		   	
         	}else if(oConfirm.value!=oPassword.value){
  		   	oConfirm.style.border = '1px solid #8E0C3A';
		   	oError.innerHTML = '您两次输入的密码不一致。';	           
         	}else{
			oConfirm.style.border = '';
			oError.innerHTML = '';		          		
         	}
         }
//注册
var oRigister = document.getElementById('register_btn');
var oBtn = oRigister.children[0];
oBtn.onclick = function(){
	if(getCookie(oPhone_Email.value)!=oPhone_Email.value&&oPhone_Email.value!=''&&oPassword.value!=''&&oError.innerHTML==''){
		setCookie(oPhone_Email.value,oPhone_Email.value,7);
		var tPsw = oPhone_Email.value+oPassword.value;
		setCookie(tPsw,tPsw,7);	
		oError.innerHTML = '注册成功';		
		window.open('login.html','_self');
	}else if(getCookie(oPhone_Email.value) == oPhone_Email.value){
		oError.innerHTML = '该用户名已被注册。';
	}else{
		oError.innerHTML = '请输入正确信息进行注册。';		
	}
}

//封装cookie
function setCookie(name,value,iDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie = name+"="+value+";"+"expires="+oDate;
	
}
function getCookie(name){
	//"cf=a; expires=2";
	var arr1 = document.cookie.split('; ');
	//['cf=a','expires=2']
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return "";
}
function removeCookie(name){
	setCookie(name,'',-1);
}
 