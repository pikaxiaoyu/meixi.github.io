//购物车商品内容
if(getCookie('numpic_one')){
	var pic_one_str = '';
	pic_one_str = '<tr class><td><a href="#"><img src="img/s-101868-1.jpg" /></a></td><td class="cart_pro_name"><a href="#">Alexander McQueen 亚历山大·麦昆</a></td><td class="num_89579">1</td><td>￥2060.00</td><td>&nbsp;<a href="#">移至收藏</a><br /><a class="numpic_one" href="#">删除商品</a></td></tr>';
	for(var i=0;i<parseInt(getCookie('numpic_one'));i++){
	    $('.cart_pro tbody').append(pic_one_str);
	}
}

if(getCookie('numpic_two')){
	var pic_two_str = '';
	pic_two_str = '<tr><td><a href="#"><img src="img/s-092117-1.jpg" /></a></td><td class="cart_pro_name"><a href="#">Alexander McQueen 亚历山大·麦昆</a></td><td class="num_89579">1</td><td>￥1700.00</td><td>&nbsp;<a href="#">移至收藏</a><br /><a class="numpic_two" href="#">删除商品</a></td></tr>';
	for(var i=0;i<parseInt(getCookie('numpic_two'));i++){
	    $('.cart_pro tbody').append(pic_two_str);
	}
}
if(getCookie('numpic_three')){
	var pic_three_str = '';
	pic_three_str = '<tr><td><a href="#"><img src="img/s-092121-1.jpg" /></a></td><td class="cart_pro_name"><a href="#">Alexander McQueen 亚历山大·麦昆</a></td><td class="num_89579">1</td><td>￥5700.00</td><td>&nbsp;<a href="#">移至收藏</a><br /><a class="numpic_three" href="#">删除商品</a></td></tr>';
	for(var i=0;i<parseInt(getCookie('numpic_three'));i++){
	    $('.cart_pro tbody').append(pic_three_str);
	}
	
}
if(getCookie('numpic_four')){
	var pic_four_str = '';
	pic_four_str = '<tr><td><a href="#"><img src="img/s-094058-1.jpg" /></a></td><td class="cart_pro_name"><a href="#">Alexander McQueen 亚历山大·麦昆</a></td><td class="num_89579">1</td><td>￥1430.00</td><td>&nbsp;<a href="#">移至收藏</a><br /><a class="numpic_four" href="#">删除商品</a></td></tr>';
	for(var i=0;i<parseInt(getCookie('numpic_four'));i++){
	    $('.cart_pro tbody').append(pic_four_str);
	}
}
if(getCookie('numpic_five')){
	var pic_five_str = '';
	pic_five_str = '<tr><td><a href="#"><img src="img/s-094066-1.jpg" /></a></td><td class="cart_pro_name"><a href="#">Alexander McQueen 亚历山大·麦昆</a></td><td class="num_89579">1</td><td>￥1740.00</td><td>&nbsp;<a href="#">移至收藏</a><br /><a class="numpic_five" href="#">删除商品</a></td></tr>';
	for(var i=0;i<parseInt(getCookie('numpic_five'));i++){
	    $('.cart_pro tbody').append(pic_five_str);
	}
}
if(getCookie('numpic_six')){
	var pic_six_str = '';
	pic_six_str = '<tr><td><a href="#"><img src="img/s-094073-1.jpg" /></a></td><td class="cart_pro_name"><a href="#">Alexander McQueen 亚历山大·麦昆</a></td><td class="num_89579">1</td><td>￥9860.00</td><td>&nbsp;<a href="#">移至收藏</a><br /><a class="numpic_six" href="#">删除商品</a></td></tr>';
	for(var i=0;i<parseInt(getCookie('numpic_six'));i++){
	    $('.cart_pro tbody').append(pic_six_str);
	}
}

//计算总价格
	var count_all = 0;
for(var i=0;i<$('.num_89579').length;i++){
	
 count_all += parseInt($('.num_89579').eq(i).next().html().replace(/￥/,''));
}
$('.cart_price_all').html("￥"+count_all+".00");

//删除
for(var i=0;i<$('.cart_pro').find('tr').length;i++){
	$('.cart_pro').find('tr').eq(i).find('td').eq(4).find('a').eq(1).click(function(){
		if(confirm('请确认删除')){
		setCookie($(this).attr('class'),parseInt(getCookie($(this).attr('class'))-1),7);
		open('cart.html','_self');
		}
	})	
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

//封装好的ajax
function ajax(url,fnSucc,fnFaild){
	var oAjax = null;
	if(window.XMLHttpRequest){
		oAjax = new XMLHttpRequest;
	}else{
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		
	}
	
	//连接服务器
	oAjax.open('GET',url,true);
	
	//发送请求
	oAjax.send();
	
	//接收服务器的返回
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(oAjax.responseText);
			}else{
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		}
	}	
}