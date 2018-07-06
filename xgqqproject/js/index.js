$(document).ready(function(){

    $(".wx").mouseover(function (){
        $(".wx-content").show();
    }).mouseout(function (){
        $(".wx-content").hide();
    });


    $(".xl").mouseover(function (){
        $(".xl-content").show();
    }).mouseout(function (){
        $(".xl-content").hide();
    });

    $(".tx").mouseover(function (){
        $(".tx-content").show();
    }).mouseout(function (){
        $(".tx-content").hide();
    });

    //nav 切换
    $(".navqie>li").mouseenter(function () {

        $(this).addClass("current");

        $(this).siblings().removeClass("current");
        var index = $(this).index();
        var image = $(".contentqie>li").eq(index);
        image.siblings().removeClass("show");

        image.addClass("show")

    });
});