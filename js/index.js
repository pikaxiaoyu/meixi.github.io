	        	/*banner效果*/
	        	var $num = 0;
	        	var $banner_time = null;
	        	var $sold_time = null;
               $('.prev').click(function(){
               	     $num--;
               	     if($num<0){
               	     	$num=4;
               	     }
               	     $('.banner a').stop().fadeOut(500);
               	     $('.banner a').eq($num).stop().fadeIn(500);
               })
               $('.next').click(function(){
               	     $num++;
               	     if($num>4){
               	     	$num=0;
               	     }
               	     $('.banner a').stop().fadeOut(500);
               	     $('.banner a').eq($num).stop().fadeIn(500);
               })
               
               $banner_time = setInterval(function(){
                     $num++;
               	     if($num>4){
               	     	$num=0;
               	     }
               	     $('.banner a').stop().fadeOut(500);
               	     $('.banner a').eq($num).stop().fadeIn(500);
               },3500);
               
               $('.banner').hover(function(){
               	clearInterval($banner_time);
               },function(){
               	               $banner_time = setInterval(function(){
                     $num++;
               	     if($num>4){
               	     	$num=0;
               	     }
               	     $('.banner a').stop().fadeOut(500);
               	     $('.banner a').eq($num).stop().fadeIn(500);
               },3500);
               })
               
               
               
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
                
      /*正被选购假数据*/
                 var obe_sold_ul = document.getElementsByClassName('be_sold_ul')[0];
				 var str_info = '';	
						ajax("js/index.json",function(str){
							var data = JSON.parse(str);
							for(var i=0;i<40;i++){
								str_info += '<li><a href="#"><img src="img/'+data[i].src+'" /><p>'+data[i].en_brand+'</p></a><div class="c_gray">'+data[i].cn_brand+'</div></li>'
							}
							obe_sold_ul.innerHTML = str_info;
						})
    
      
				






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

