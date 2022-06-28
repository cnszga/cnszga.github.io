//个人业务 企业业务 FOREIGNER 
var $tab_li2 =$(".tab_title span");
    $tab_li2.click(function (even) {
        $(this).addClass('active').siblings().removeClass('active');
        var index2 = $tab_li2.index(this);
        $(".tab_content>.row").eq(index2).show().siblings().hide();
    });
    
    
//业务知识库 （ 户政出入境刑警业务）
var $tab_li1 =$(".t_title a");
    $tab_li1.click(function (even) {
        $(this).addClass('active').siblings().removeClass('active');
        var index1 = $tab_li1.index(this);
        $(".t_message>ul").eq(index1).show().siblings().hide();
    });



//民意征集   业务知识库
var $tab_li3 =$(".ywzsk .wx_items span,.jmhd_myzj .wx_items span");
$tab_li3.click(function (even) {
    $(this).addClass('active').siblings().removeClass('active');
    var index3 = $tab_li3.index(this);
    $(".ywzsk .t_message>ul,.jmhd_myzj .t_message>ul").eq(index3).show().siblings().hide();
});
 
 
