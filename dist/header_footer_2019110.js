
function header(n)
{
	// document.write("<span style=\"position:absolute;left:50%;top:2px;z-index:999;\"><img src=\"http://ga.sz.gov.cn/syx/syx.png\"></span>");
		document.write("<script src='//service.gd.gov.cn/wza/wza.js?app=ga-sz'></script>");
	document.write("<span style=\"position:absolute;left: 42%;top:2px;z-index:999;cursor:pointer;\" ><img src=\"http://ga.sz.gov.cn/images/barrierFree.png\"/ id='dkwza'></span>");
	document.write("<div class=\"szga-container szga-headContainer\">");
	document.write("	<a href=\"http://ga.sz.gov.cn/\" class=\"logo\"><img src=\"http://ga.sz.gov.cn/images/logo_20171211.png\" alt=\"\"/></a>");
	document.write("	<span class=\"navbar_toggle\">");
	document.write("		<span class=\"icon_bar\"></span>");
	document.write("		<span class=\"icon_bar\"></span>");
	document.write("		<span class=\"icon_bar\"></span>");
	document.write("	</span>");
	document.write("	<em></em>");
	document.write("	<div class=\"ipt\">");
	document.write("		<form id=\"searchform\" name=\"searchform\" method=\"get\" accept-charset=\"utf-8\"  target=\"_blank\" onsubmit=\"return checkForm();\">");
	
	//document.write("			<input name=\"channelid\" id=\"channelid\" type=\"hidden\" value=\"212414\"/>");
	//document.write("			<input type=\"hidden\" name=\"perpage\" value=\"\"/>");
	
	document.write("			<input type=\"text\" id=\"sr\" class=\"search-inp\" name=\"keywords\" autocomplete=\"off\" onblur=\"if(value==''){value='查询您想找的服务';$(this).css({color:'#B1B1B1'})}\" onfocus=\"if(value == '查询您想找的服务'){value='';$(this).css({color:'#292929'})}\" value=\"查询您想找的服务\"  style=\"color:#B1B1B1;font-weight:700;\" />");
	document.write("			<span><input type=\"submit\" id=\"sybtn\" value=\"\" style=\"float:right; width:40px; border:0; margin-right:2px;background:transparent;cursor:pointer;\"/></span>");
	document.write("		</form>");
	document.write("	</div>");
	document.write("	<ul class=\"szga-nav\">");

	if(n=="I")
		document.write("		<li class=\"active\"><a href=\"http://ga.sz.gov.cn/\">首页</a></li>");
	else
		document.write("		<li><a href=\"http://ga.sz.gov.cn/\">首页</a></li>");
	if(n=="MS")
		document.write("		<li class=\"active\">");
	else
		document.write("		<li>");
		
	document.write("			<a href=\"javascript:void(0);\" class=\"inactive\">政务服务<span class=\"down_icon\"></span></a><span class=\"down_iphone\"></span>");
	document.write("			<ul class=\"toggle\">");
	document.write("				<li><a href=\"https://msjw.ga.sz.gov.cn?serviceType=1\">个人服务</a></li>");
	document.write("				<li><a href=\"https://msjw.ga.sz.gov.cn?serviceType=2\">法人服务</a></li>");
	document.write("				<li><a href=\"https://msjw.ga.sz.gov.cn?serviceType=3\">港澳居民服务</a></li>");
	document.write("				<li><a href=\"http://ga.sz.gov.cn/WSBS/\">办事服务</a></li>");
	document.write("			</ul>");
	document.write("		</li>");

	if(n=="RM")
		document.write("		<li class=\"active\"><a href=\"https://msjw.ga.sz.gov.cn/wwyjfzx/\">融媒资讯</a></li>");
	else
		document.write("		<li><a href=\"https://msjw.ga.sz.gov.cn/wwyjfzx/\">融媒资讯</a></li>");
		
	if(n=="JW")
		document.write("		<li class=\"active\"><a href=\"http://ga.sz.gov.cn/ZWGK/\">警务公开</a></li>");
    else
		document.write("		<li><a href=\"http://ga.sz.gov.cn/ZWGK/\">警务公开</a></li>");
    
    if(n=="JM")
		document.write("		<li class=\"active\"><a href=\"http://ga.sz.gov.cn/JMHD/\">便民互动</a></li>");
    else
		document.write("		<li><a href=\"http://ga.sz.gov.cn/JMHD/\">便民互动</a></li>");
			
	if(n=="YH")
		document.write("		<li class=\"active yhzx yhzx_list\">");
	else
		document.write("		<li class='yhzx yhzx_list'>");
		
	document.write("			<a href=\"javascript:void(0);\" class=\"inactive\">用户中心<span class=\"down_icon\"></span></a><span class=\"down_iphone\"></span>");
	document.write("			<ul class=\"toggle\">");
	document.write("				<li><a href=\"https://msjw.ga.sz.gov.cn/user?loginType=1\">个人中心</a></li>");
	document.write("				<li><a href=\"https://msjw.ga.sz.gov.cn/user?loginType=2\">法人中心</a></li>");
	document.write("			</ul>");
	document.write("		</li>");
	document.write("	</ul>");
	document.write("</div>");
}

function footer()
{
	document.write("<div class=\"szga-container szga-footerContainer\">");
	document.write("	<div class=\"fl copy copy_left\">CopyRight ©2010-2022 ga.sz.gov.cn All Rights Reserved <label>深圳市公安局 版权所有</label><br/><span><a href=\"http://beian.miit.gov.cn\" target=\"_blank\">备案序号：粤ICP备12007389号-1</a>&nbsp;<a class=\"ba-num\" target=\"_blank\" href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode= 44030302001160\"><img src=\"http://ga.sz.gov.cn/images/ga_beian.png\"/>粤公网安备 44030302001160号</a><br/>网站标识码：4403000002&nbsp;&nbsp;&nbsp;&nbsp;主办：深圳市公安局</span></div>");
	document.write("	<div class=\"fl copy copy_contact\">");
	document.write("	<span class=\"copy_link\"><a href=\"http://ga.sz.gov.cn/KH/LXWM/\">联系我们</a> | <a href=\"http://ga.sz.gov.cn/KH/WZBJ/\">网站背景</a> | <a href=\"http://ga.sz.gov.cn/KH/BQSM/\">版权声明</a> | <a href=\"http://ga.sz.gov.cn/KH/YSBH/\">隐私保护</a> | <a href=\"http://ga.sz.gov.cn/ZDDT/\">网站地图</a> | <a href=\"http://ga.sz.gov.cn/YQLJ/\">友情链接</a> | <a href=\"http://ga.sz.gov.cn/GDLJ/\">归档信息</a></span>");
	document.write("		<p class=\"p1\">行政执法投诉电话：110、12389 &nbsp;&nbsp;<a href=\"https://cloud.gd.gov.cn/sxauth/sx/login?app=sz-zmhd&redirect_uri=https://szum.sz.gov.cn:9443/IGI/nbhd/GDnetizenLogin.do/callBack&state=159796\" class=\"jzxx_zxts\" target=\"_blank\">行政执法投诉信箱</a></p>");
	document.write("		<p>咨询、报障时间：工作日9:00-12:00、14:00-18:00</p>");
	document.write("		<p>户政业务咨询电话：0755-84465000 出入境业务咨询电话：0755-12367</p>");
	document.write("		<p>无犯罪记录证明业务咨询电话：0755-84466898 网站报障电话：0755-84464600</p>");
	document.write("	</div>");
	document.write("	<div class=\"fr szga-footerIcon\">");
	document.write("		<a href=\"http://bszs.conac.cn/sitename?method=show&id=51C148A111134843E053012819ACAFD6\" target=\"_blank\"><img src=\"http://ga.sz.gov.cn/images/f_1_20171211.png\" alt=\"党政机关网站\" /></a>");
	document.write("		<a href=\"https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=4403000002&url=http%3A%2F%2Fga.sz.gov.cn%2F\" target=\"_blank\"><img src=\"http://ga.sz.gov.cn/images/f_2_20171211.png\" alt=\"政府网站找错\" /></a>");
	document.write("		<a href=\"http://www.sz.gov.cn\" target=\"_blank\"><img src=\"http://ga.sz.gov.cn/images/f_3_20171211.png\" alt=\"深圳政府在线\" /></a>");
	document.write("		<a href=\"http://ga.sz.gov.cn/images/paszs.gif\" target=\"_blank\" class=\"szpa\"><img src=\"http://ga.sz.gov.cn/images/f_4_20171211.png\" alt=\"平安深圳\" /></a>");
	document.write("	</div>");
	document.write("	<div style=\"display:none;\" class=\"zz_tj2018\"><script src=\"https://s95.cnzz.com/z_stat.php?id=1261932790&web_id=1261932790\" language=\"JavaScript\"></script></div>");
	document.write("</div>");
}

$(function(){
	$("a[title='站长统计']").hide();
		// IE8 兼容配置 
	window.onload = function() { 
		cnillWzaInstance.startInit("/js/cnill_polyfill.swf");
		document.getElementById("dkwza").onclick = function() { 
			// 执行实例的init方法 
			cnillWzaInstance.init(); // cnillWzaInstance为全局变量
		}
	}
	
})


function checkForm()
{
	var searchword= $("#sr").val();

	if(searchword==""||searchword=="查询您想找的服务")
	{
		alert("请输入关键词");
		return false;
	}

	var keys = $("#sr").val();
	$("#searchform").attr("action","http://search.gd.gov.cn/search/local_msg/755530?keywords="+keys);
	document.charset="utf-8";
	//$("#searchform").submit();
}


// 智能客服
$(function(){
	// var width=$(window).width();
	// var ua = navigator.userAgent.toLowerCase();
	// var isWeixin = ua.indexOf('micromessenger') != -1;
	// if(width>792){
	// 	var _layer = '<div class="wlwzPoup _aics_trigger_wrapper_"><div class="kf-layer"><i class="close-btns1"></i><a href="https://msjw.ga.sz.gov.cn/wlwz/wx/index_pc.html"><img src="http://ga.sz.gov.cn/images/jzxx_icon.png" /><span>局长信箱</span></a></div></div><div class="znkfPoup _aics_trigger_wrapper_"><div class="kf-layer"><i class="close-btns"></i><a href="https://msjw.ga.sz.gov.cn/webchatbot/chat.html?sysNum=1600996697531&sourceId=2191&lang=zh_CN"><img src="http://ga.sz.gov.cn/images/kf-icon.png" /><span>智能客服</span></a></div></div>';
	// 	$('body').append(_layer);
	// 	$("body").on("click",".close-btns1",function(event){
	// 	    $(".wlwzPoup").remove();	
	// 	});
	// 	$("body").on("click",".close-btns",function(event){
	// 	    $(".znkfPoup").remove();	
	// 	});
	// }else {
	// 	var _layer = '<div class="wlwzPoup _aics_trigger_wrapper_"><div class="kf-layer"><i class="close-btns1"></i><a href="https://msjw.ga.sz.gov.cn/wlwz/wx/index_pc.html"><img src="http://ga.sz.gov.cn/images/jzxx_icon.png" /><span>局长信箱</span></a></div></div><div class="znkfPoup _aics_trigger_wrapper_"><div class="kf-layer"><i class="close-btns"></i><a href="https://msjw.ga.sz.gov.cn/webchatbot/h5chat.html?sysNum=1600996697531&sourceId=2197&lang=zh_CN"><img src="http://ga.sz.gov.cn/images/kf-icon.png" /><span>智能客服</span></a></div></div>';
	// 	$('body').append(_layer);
	// 	$("body").on("click",".close-btns1",function(event){
	// 	   $(".wlwzPoup").remove();	
	// 	});
	// 	$("body").on("click",".close-btns",function(event){
	// 	    $(".znkfPoup").remove();	
	// 	});
	// }
	// if(isWeixin){
	// 	$(".wlwzPoup a").attr("href","https://msjw.ga.sz.gov.cn/wlwz/wx/index.html");
	// }
})

// document.write("<script src='http://ga.sz.gov.cn/js/layer.min.js'></script>");
// $(function(){
// 	var width=$(window).width();
// 	if(width>792){
// 		var _layer = '<div id="_aics_trigger_wrapper_"><div class="kf-layer"><i class="close-btns"></i><a href="#"><img src="http://ga.sz.gov.cn/images/kf-icon.png" OLDSRC="kf-icon.png" OLDID="112116" RELATED="1" /><span>智能客服</span></a></div></div>';
// 		$('body').append(_layer);
// 		$(".kf-layer").on("click",function(e){
// 		 	layer.open({
//                 type: 1,
//                 closeBtn: 1,
//                 title : '公告',
//                 area: ['360', 'auto'],
//                 shadeClose: true,
//                 content: '<div style="padding:10px; line-height:200%;">产品升级中，暂停服务，给您带来的不便，深感抱歉。</div>'
//             });
// 		})
//         $(".kf-layer").on("click","i",function(event){
//         	event.stopPropagation();
// 		    $("#_aics_trigger_wrapper_").remove();	
		     
// 		});
// 	}else {
// 		var _layer = '<div id="_aics_trigger_wrapper_"><div class="kf-layer"><i class="close-btns"></i><a href="#"><img src="http://ga.sz.gov.cn/images/kf-icon.png" OLDSRC="kf-icon.png" OLDID="112116" RELATED="1" /><span>智能客服</span></a></div></div>';
// 		$('body').append(_layer);
// 		$(".kf-layer").on("click",function(e){
// 			alert('产品升级中，暂停服务，给您带来的不便，深感抱歉。')
// 		})
//         $(".kf-layer").on("click","i",function(event){
//         	event.stopPropagation();
// 		    $("#_aics_trigger_wrapper_").remove();	
		     
// 		});
// 	}
// })


$(document).ready(function() {
	$(document).on("click","a",function() {
		var ym0 = $(this).attr('href').replace(/^\s+|\s+$/g, "");
		var ym0_1 = ym0.substring(0, 1);
		var ym0_5 = ym0.substring(0, 5);
		var ym0_10 = ym0.substring(0, 10);
		var ym0_18 = ym0.substring(0, 18);
		var ym0_20 = ym0.substring(0, 20);
		var ym0_22 = ym0.substring(0, 22);
		var ym0_23 = ym0.substring(0, 24);
        var ym0_24 = ym0.substring(0, 25);
        var ym0_19 = ym0.substring(0, 19);
		 
		
		if(ym0_1 == "/" || ym0_1 == "." || ym0_1 == "#" || ym0_5 == "index" || ym0_10 == "javascript" || ym0_18 == 'javascript:void(0)' || ym0_22 == 'http://www.szga.gov.cn' || ym0_23 == 'http://msjw.ga.sz.gov.cn' || ym0_23 == 'http://hzyy.szga.gov.cn' || ym0_19 == 'http://ga.sz.gov.cn' || ym0_24 == 'https://msjw.ga.sz.gov.cn' || ym0 == 'http://swba.szga.gov.cn' || ym0 == 'http://gjgzryba.szga.gov.cn/gzryba/login.html' || ym0 == 'http://183.62.232.216:81' || ym0 == 'https://iask.qq.com/mclient/#/client?productId=a9a24d2c1c5f3382622308cb6e74bbc0&staffService=0' ) {
			return;
		} else {
			return confirm('您访问的链接即将离开“深圳市公安局”门户网站，是否继续？');
		}
	});

});


$(document).ready(function () {
		var width=$(window).width();
    		$(".navbar_toggle").click(function(event){
	            $(".szga-nav li").stop().slideToggle();
	        })
    		$(window).resize(function(){
			    var width=$(this).width();
			    if(width>792){
			        $(".szga-nav li").show();
			    }else{
			        $(".szga-nav li").hide();
			    }
			})
    		if(width<792){
				//$(".jzxx_zxts").attr("href","https://cloud.gd.gov.cn/sxauth/sx/login?app=sz-zmhd&redirect_uri=https://szum.sz.gov.cn:9443/IGI/nbhd/GDnetizenLogin.do/callBack&state=phone_159796");
		        $(".szga-header em").click(function(){
		        	$(".ipt").stop().slideToggle();
		        })
		        
                $('.down_iphone').click(function(){
					if($(this).siblings('ul').css('display')=='none'){
						$(this).siblings('ul').slideDown().children('li');
						if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
							$(this).parents('li').siblings('li').children('ul').slideUp();
						}
					}else{
						$(this).siblings('ul').slideUp();
						$(this).siblings('ul').children('li').children('ul').slideUp();
					}
				})
        
	    	}else{
	    		//PC端导航条收缩
				$(".szga-nav li").hover(function () {
				        $(this).find(".toggle").stop().slideToggle();
				    });
	    	}
 
    		
})



$(function(){
	if(navigator.cookieEnabled == false){
		$('body').prepend('<div class="cookie_notice_wrap" style="text-align:center;background:#212121;padding:10px;font-size:14px;color:#fff;position:relative;z-index:999999"><span style="background:#FF7800;font-size:14px;color:#fff;display:inline-block;padding:2px;border-radius:2px;">温馨提示</span> 当前浏览器已限制Cookie使用，将影响深圳公安正常登录。请更改浏览器隐私设置以保证正常使用</div>');
	}
})
