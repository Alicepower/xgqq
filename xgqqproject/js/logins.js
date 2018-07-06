
        function firstFun() {
            var first =  document.getElementById("first");

            var second =  document.getElementById("second");

            first.style.display='none';
            second.style.display='block';

            return false;

        }
        
        function secondFun() {
            var first =  document.getElementById("first");
            var second =  document.getElementById("second");
            first.style.display='block';
            second.style.display='none';

            return false;
        }



  $(document).ready(function(){
            for (var i = 1; i <10; i++) {

                var image = $("<img  src='image/ranking_01.png'style='margin-left: 80px'></img>");
                var title = $("<span class='title'></span>").text( i );
                var userimg = $("<img  src='image/userImg.png'class='userimgss'></img>");
                var per = $("<span class='year'></span>").text("土豪"+i);
                var year = $("<span class='year'></span>").text("1317******");
                var price = $("<span class='year'style='color: red ;'></span>").text("￥1523");

                var br = $("<br></br>").text("");
                $("#append").append(image,title,userimg, per, year, price,br);
            }

        });


