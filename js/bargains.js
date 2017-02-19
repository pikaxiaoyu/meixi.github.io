               /*fix_top效果*/
              $(window).scroll(function(ev){
              	if($(this).scrollTop()>=179){
                $('.fix_top').fadeIn(300);
                $('.fix_top').css('top',0);
              	}else{
                $('.fix_top').fadeOut(300);             	            		              		
              	}
              })
              $('.fix_top .txt').focus(function(){
              	if($(this).val()=='请输入您的关键词'){
              	    $(this).val('');             		
                 }
              })
              $('.fix_top .txt').blur(function(){
              	if($(this).val()==''){
              	    $(this).val('请输入您的关键词');
              	}
              })
 
 
  		      /*be_sold*/
  		     $('.be_sold_prev_pic').click(function(){
  		     	if(parseInt($('.be_sold_ul').css('left'))<-100){
    		     	$('.be_sold_ul').stop().animate({'left':(parseInt($('.be_sold_ul').css('left'))+192)},500);		     		
  		     	}
  		     })
  		     
  		     $('.be_sold_next_pic').click(function(){
  		     	if(parseInt($('.be_sold_ul').css('left'))>-6500){
		     	  $('.be_sold_ul').stop().animate({'left':(parseInt($('.be_sold_ul').css('left'))-192)},500);  		     		
  		     	}else{
  		     	  $('.be_sold_ul').animate({'left':'-1536'})
  		     	}
  		     })
  		     
             $sold_time = setInterval(function(){
 					if(parseInt($('.be_sold_ul').css('left'))>-6500){
		     	  $('.be_sold_ul').stop().animate({'left':(parseInt($('.be_sold_ul').css('left'))-192)},500);  		     		
  		     	}            	
             },2500);
             
             $('.shop_info_banner').hover(function(){
             	clearInterval($sold_time);
             },function(){
              $sold_time = setInterval(function(){
 					if(parseInt($('.be_sold_ul').css('left'))>-6500){
		     	  $('.be_sold_ul').stop().animate({'left':(parseInt($('.be_sold_ul').css('left'))-192)},500);  		     		
  		     	}else{
  		     		$('.be_sold_ul').animate({'left':'-1536'})
  		     	}
             },2500);            	
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
      /*左侧收缩*/ 

      $('.li_c a').click(function(){
      	if($(this).next().css('display') == 'none'){
      	   $(this).next().eq($(this).index()).css('display','block');
           $(this).eq($(this).index()).css('background','url(img/pic_arrow_u.gif) no-repeat 173px 4px');
      	  }else{
      	   $(this).next().eq($(this).index()).css('display','none');
           $(this).eq($(this).index()).css('background','url(img/pic_arrow_r.gif) no-repeat 173px 4px');      	  
      	}
      })
      
    
      $('#brand_a,#price_a').click(function(){
      	if($(this).next().css('display') == 'block'){
           $(this).eq($(this).index()).css('background','url(img/pic_arrow_r.gif) no-repeat 173px 14px');
      	  }else{
           $(this).eq($(this).index()).css('background','url(img/pic_arrow_u.gif) no-repeat 173px 14px');      	  
      	}      	
           $(this).next().toggle(100);        
      })
      
      
//      左侧滚动位置变化
      $(window).scroll(function(ev){
      	if($(this).scrollTop()<210){
      		$('#sidebar').css('position','absolute');
      		$('#sidebar').css('top','180px');
      	}
      	if($(this).scrollTop() >= 210){
       	$('#sidebar').css('position','fixed');
      	$('#sidebar').css('top','60px');
      	}
      	    if(($(this).scrollTop()+450+200)-($('.product_list').height())>10){
	        $('#sidebar').css('position','absolute');
	      	$('#sidebar').css('top',$('.product_list').height()-$(this).height()+250); 
      	 }
      })



//  商品内容假数据
    var pro_list = document.getElementById('product-list');
    var ul_list = pro_list.getElementsByClassName('product_list')[0];
    var pro_str = '';
        var flag = true;
        var flag1 = true;
        var flag2 = true;
                ajax("js/bargains.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=0;i<120;i++){
                		pro_str += '<li><a href="product.html" class="product_img"><img src="img/'+data[i].src+'" /></a><div class="product_n"><a href="product.html" class="product_link"><p class="pro_name">'+data[i].name+'<br />'+data[i].style+'</p></a><div class="product_p"><div class="product_p_c"><s>'+data[i].jyprice+'</s><span>'+data[i].mcprice+'</span><div class="clear"></div></div></li>';
                	}
                	ul_list.innerHTML = pro_str;
//  product_info存储

                       $('.product_list').find('li').click(function(){
                       	   setCookie('src',data[$(this).index()].src,7);
                       	   setCookie('name',data[$(this).index()].name,7);
                       	   setCookie('style',data[$(this).index()].style,7);
                       	   setCookie('jyprice',data[$(this).index()].jyprice,7);
                       	   setCookie('mcprice',data[$(this).index()].mcprice,7);
                       	   setCookie('s_num',data[$(this).index()].s_num,7);
                       	   setCookie('id',data[$(this).index()].id,7);
                       })
                }) 
                
                //新品
                var new_str = '';
     $('#new').click(function(){
     	if(flag1){   		
      	           $(this).css({'color':'#8E0C3A','font-weight':'bold'}).siblings().css({'color':'#6c6c6c','font-weight':'normal'});    	          
                   ajax("js/bargains.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=0;i<120;i++){
                		new_str += '<li><a href="product.html" class="product_img"><img src="img/'+data[i].src+'" /></a><div class="product_n"><a href="product.html" class="product_link"><p class="pro_name">'+data[i].name+'<br />'+data[i].style+'</p></a><div class="product_p"><div class="product_p_c"><s>'+data[i].jyprice+'</s><span>'+data[i].mcprice+'</span><div class="clear"></div></div></li>';
                	}
                	low_to_high = '';
                	high_to_low = '';
                	ul_list.innerHTML = new_str;
//  product_info存储

                       $('.product_list').find('li').click(function(){
                       	   setCookie('src',data[$(this).index()].src,7);
                       	   setCookie('name',data[$(this).index()].name,7);
                       	   setCookie('style',data[$(this).index()].style,7);
                       	   setCookie('jyprice',data[$(this).index()].jyprice,7);
                       	   setCookie('mcprice',data[$(this).index()].mcprice,7);
                       	   setCookie('s_num',data[$(this).index()].s_num,7);
                       	   setCookie('id',data[$(this).index()].id,7);
                       })
                            flag = true;
                            flag1 = false;
                            flag2 = true;
                })  
              }
     })
//     价格从低到高排序
    var low_to_high = '';

      $('#lowtohigh').click(function(){
      	if(flag){      		    	
      	  $(this).css({'color':'#8E0C3A','font-weight':'bold'}).siblings().css({'color':'#6c6c6c','font-weight':'normal'});
                            ajax("js/low_to_high.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=0;i<120;i++){
                		low_to_high += '<li><a href="product.html" class="product_img"><img src="img/'+data[i].src+'" /></a><div class="product_n"><a href="product.html" class="product_link"><p class="pro_name">'+data[i].name+'<br />'+data[i].style+'</p></a><div class="product_p"><div class="product_p_c"><s>'+data[i].jyprice+'</s><span>'+data[i].mcprice+'</span><div class="clear"></div></div></li>';
                	}
                    new_str = '';
                    high_to_low = '';
                	ul_list.innerHTML = low_to_high;
//  product_info存储
                       $('.product_list').find('li').click(function(){
                       	   setCookie('src',data[$(this).index()].src,7);
                       	   setCookie('name',data[$(this).index()].name,7);
                       	   setCookie('style',data[$(this).index()].style,7);
                       	   setCookie('jyprice',data[$(this).index()].jyprice,7);
                       	   setCookie('mcprice',data[$(this).index()].mcprice,7);
                       	   setCookie('s_num',data[$(this).index()].s_num,7);
                       	   setCookie('id',data[$(this).index()].id,7);
                       })
                                  flag = false;
                                  flag1 = true;
                                  flag2 = true;
                })
             }
      })
      
      //价格从高到低
      var high_to_low = '';
       $('#hightolow').click(function(){
      	      if(flag2){     	      	     	      
      	  $(this).css({'color':'#8E0C3A','font-weight':'bold'}).siblings().css({'color':'#6c6c6c','font-weight':'normal'});
                            ajax("js/low_to_high.json",function(str){
                	var data = JSON.parse(str);
                	for(var i=119;i>=0;i--){
                		high_to_low += '<li><a href="product.html" class="product_img"><img src="img/'+data[i].src+'" /></a><div class="product_n"><a href="product.html" class="product_link"><p class="pro_name">'+data[i].name+'<br />'+data[i].style+'</p></a><div class="product_p"><div class="product_p_c"><s>'+data[i].jyprice+'</s><span>'+data[i].mcprice+'</span><div class="clear"></div></div></li>';
                	}
                    new_str = '';
                    low_to_high = '';
                	ul_list.innerHTML = high_to_low;
//  product_info存储
                       $('.product_list').find('li').click(function(){
                       	   setCookie('src',data[Math.abs($(this).index()-119)].src,7);
                       	   setCookie('name',data[Math.abs($(this).index()-119)].name,7);
                       	   setCookie('style',data[Math.abs($(this).index()-119)].style,7);
                       	   setCookie('jyprice',data[Math.abs($(this).index()-119)].jyprice,7);
                       	   setCookie('mcprice',data[Math.abs($(this).index()-119)].mcprice,7);
                       	   setCookie('s_num',data[Math.abs($(this).index()-119)].s_num,7);
                       	   setCookie('id',data[Math.abs($(this).index()-119)].id,7);
                       })
                           flag = true;
                           flag1 = true;
                           flag2 = false;
                })
             }
      })     

//  封装的ajax
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