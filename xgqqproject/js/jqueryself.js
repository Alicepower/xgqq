(function($) {  $(".btn").on('click',function(){

    var user = $("#user").val();

    var pass = $("#pass").val();

    if(user==""){

        $('<div id="msg" />').html("用户名不能为空！").appendTo('.sub').fadeOut(2000);

        $("#user").focus();

        return false;

    }

    if(pass==""){

        $('<div id="msg" />').html("密码不能为空！").appendTo('.sub').fadeOut(2000);

        $("#pass").focus();

        return false;

    }

    $.ajax({

        type: "POST",

        url: "login.php?action=login",

        dataType: "json",

        data: {"user":user,"pass":pass},

        beforeSend: function(){

            $('<div id="msg" />').addClass("loading").html("正在登录...").css("color","#999")  .appendTo('.sub');

        },

        success: function(json){

            if(json.success==1){

                $("#login_form").remove();

                var div =   "<div id='result'><p><strong>"

                    + "</strong> 恭喜您登录成功！</p> "

                    </div>"

                $("#login").append(div);

            }else{

                $("#msg").remove();

                $('<div id="errmsg" />').html(json.msg).css("color","#999").appendTo('.sub')  .fadeOut(2000);

                return false;

            }

        }

    });

});

})(jQuery);