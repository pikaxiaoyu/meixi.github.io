//获取cooki内容并且更改页面信息
/*  id=mycarousel1
	<li class="list_edit"><a href="#"><img class="list_edit_pic1" src="img/s-092117-1.jpg" /></a></li>
             							<li class="list_edit"><a href="#"><img src="img/s-092117-2.jpg" /></a></li>
             							<li class="list_edit"><a href="#"><img src="img/s-092117-3.jpg" /></a></li>
             							<li class="list_edit"><a href="#"><img src="img/s-092117-4.jpg" /></a></li>
             							<li class="list_edit"><a href="#"><img src="img/s-092117-5.jpg" /></a></li> 
 * */
				if(getCookie('src')){
					var list_edit_str = '';
                    // 092117 
                    var h_pic = '';
                    var reg_list = getCookie('src').replace(/r-|-[0-9]|[.jpg]/g,'');					
					for(var i=0;i<parseInt(getCookie('s_num'));i++){
						list_edit_str += '<li class="list_edit"><a href="#"><img src="img/s-'+reg_list+"-"+(i+1)+'.jpg" /></a></li>';
					    h_pic += '<li><img src="img/h-'+reg_list+"-"+(i+1)+'.jpg" /></li>';
					}
					$('#mycarousel1').html(list_edit_str);
					$('#mycarousel1').children(0).find('img').eq(0).attr('class','list_edit_pic1');
                    $('.proImg').find('ul').html(h_pic);
				}
				//刚开始进来的第一张图片显示
				    $('#small_pic').attr('src','img/d-'+reg_list+"-1.jpg");
                    $('#pig_img').attr('src','img/h-'+reg_list+"-1.jpg");
                //商品右侧信息显示
                $('.pro_r h1').find('a').html(getCookie('name'));
                $('.pro_r h1').find('span').html(getCookie('style'));
                $('.refer_price').find('s').html('参考价：'+getCookie('jyprice'));
                $('.refer_price').find('span').html('美西价：'+getCookie('mcprice'));
                //地图大图详细信息介绍
                
                
                //购物车保存购买商品次数
                if(getCookie('num'+getCookie('id'))){
                	num = getCookie('num'+getCookie('id'));
                }else{
                	var num = 0;
                }
                $('#addbag').click(function(){
                	num++;
                   setCookie('num'+getCookie('id'),num,7);
                   alert('添加成功');
                })
//商品左侧缩略图
           
				$('.list_edit').mouseover(function(){
					$('.list_edit').find('img').removeClass('list_edit_pic1');
					$(this).find('img').addClass('list_edit_pic1');
					$('.pro_img').find('a').html('<img src="img/d-'+reg_list+"-"+($(this).index()+1)+'.jpg"/>');
				  $('.relative').html('<img id="pig_img" src="img/h-'+reg_list+"-"+($(this).index()+1)+'.jpg"/>');
				})

//放大镜
		$('.pro_img').mousemove(function(ev){
				$('#fk').css('display','block');
				$('#pig_pic').css('display','block');
				//比例

				$disX = ($('#fk').offset().left-$(this).offset().left)/(390);
				$dixY = ($('#fk').offset().top-$(this).offset().top)/(460);
				//鼠标于方块居中
				$('#fk').css('left',ev.pageX-$(this).offset().left-$('#fk').width()/2);
				$('#fk').css('top',ev.pageY-$(this).offset().top-$('#fk').height()/2);
				if($('#fk').offset().left<=$(this).offset().left){
					$('#fk').css('left',0);
				}
				if($('#fk').offset().top<=$(this).offset().top){
							$('#fk').css('top',0);			
				}
				if($('#fk').offset().top>=420){
					    $('#fk').css('top',240);
				}
				if($('#fk').offset().left>=($(this).offset().left+$(this).width()-$('#fk').width())){
					   $('#fk').css('left',$(this).width()-$('#fk').width())
				};
				$('#pig_img').css('left',(-$disX)*800);
				$('#pig_img').css('top',(-$dixY)*960);
		})
    
    		$('.pro_img').mouseout(function(ev){
    					$('#fk').css('display','none');
							$('#pig_pic').css('display','none');
    		})






















/*********************ajax*******************/
      /*最新单品假数据*/
     
                var oNew_shop = document.getElementsByClassName('new_shop')[0];
                var oNew_shop_dl4 = oNew_shop.getElementsByClassName('dl4')[0];
                var oNew_shop_dl4_str = '<dt><a href="#">今日推荐单品</a></dt>';
                ajax("js/new_shop.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=0;i<3;i++){
                		oNew_shop_dl4_str += '<dd><a href="#"><img src="img/'+data[i].src+'" /><div class="tj_info"><a href="#">'+data[i].info_1+'</a><a href="#">'+data[i].info_2+'</a></div></a></dd>';
                	}
                	oNew_shop_dl4.innerHTML = oNew_shop_dl4_str;
                })
                
      /*童装假数据*/

                var oChild = document.getElementsByClassName('child')[0];
                var oChild_dl4 = oChild.getElementsByClassName('dl4')[0];
                var child_str = '<dt><a href="#">今日推荐单品</a></dt>';
                ajax("js/children.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=0;i<3;i++){
                		child_str += '<dd><a href="#"><img src="img/'+data[i].src+'" /><div class="tj_info"><a href="#">'+data[i].info_1+'</a><a href="#">'+data[i].info_2+'</a></div></a></dd>';
                	}
                	oChild_dl4.innerHTML = child_str;
                })

      /*腕表假数据*/
                
                var oWatch = document.getElementsByClassName('watch')[0];
                var oWatch_dl4 = oWatch.getElementsByClassName('dl4')[0];
                var watch_str = '<dt><a href="#">今日推荐单品</a></dt>';
                ajax("js/watch.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=0;i<3;i++){
                		watch_str += '<dd><a href="#"><img src="img/'+data[i].src+'" /><div class="tj_info"><a href="#">'+data[i].info_1+'</a><a href="#">'+data[i].info_2+'</a></div></a></dd>';
                	}
                	oWatch_dl4.innerHTML = watch_str;
                }) 
                
      /*推荐大牌假数据*/
                
                var oBrand = document.getElementsByClassName('brand')[0];
                var oTjdp = oBrand.getElementsByClassName('tj_dapai')[0];
                var oTjdp_str = '<dt><a href="#">今日推荐大牌</a></dt>';
                ajax("js/brand.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=0;i<2;i++){
                		oTjdp_str += '<dd><a href="#"><img src="img/'+data[i].src+'" /><div class="pic_info"><p>'+data[i].info_1+'</p><p>'+data[i].info_2+'</p></div></a></dd>';
                	}
                	oTjdp.innerHTML = oTjdp_str;
                }) 
                
      /*推荐设计品牌假数据*/
     
                var oBrand = document.getElementsByClassName('brand')[0];
                var oDesigner = oBrand.getElementsByClassName('designer')[0];
                var oDesigner_str = '<dt><a href="#">今日推荐设计品牌</a></dt>';
                ajax("js/brand.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=2;i<4;i++){
                		oDesigner_str += '<dd><a href="#"><img src="img/'+data[i].src+'" /><div class="pic_info"><p>'+data[i].info_1+'</p><p>'+data[i].info_2+'</p></div></a></dd>';
                	}
                	oDesigner.innerHTML = oDesigner_str;
                })      






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