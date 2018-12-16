$(function(){
    autoPlay();
    function autoPlay(){
        //获取偏移位
        var offset = 0;

        setInterval(function(){

            offset += -10;

            if(offset <= -3560){
                offset = 0;
            }

            $(".bean ul").css("marginLeft",offset);
        },50)
    }

    aa();
    function aa(){
        $(window).scroll(function(){
            var offset = $("html,body").scrollTop();
            if(offset>200 && offset <500){
                $(".li1").css(
                    "width","200")
             }else{
                $(".li1").css(
                    "width","150")
            }
            if(offset>500 && offset <800){
                $(".li2").css(
                    "width","200")
            }else{
                $(".li2").css(
                    "width","150")
            }
            if(offset>800 && offset <1100){
                $(".li3").css(
                    "width","200")
            }else{
                $(".li3").css(
                    "width","150")
            }
            if(offset>1100 && offset <1300){
                $(".li4").css(
                    "width","200")
            }else{
                $(".li4").css(
                    "width","150")
            }
            if(offset>1300 && offset <1800){
                $(".li5").css(
                    "width","200")
            }else{
                $(".li5").css(
                    "width","150")
            }
        })
    }

    bb();
    function bb(){

        $(".me h2").show(1000);
        $(".text p").eq(1).fadeIn(2000);
        $(".text p").eq(2).show(3000);
        $(".text p").eq(3).fadeIn(4000);
        $(".text p").eq(4).show(8000,function(){
                $(".me").slideUp(5000)
            });

    }

    cc();
    function cc(){
        $(".img").mouseenter(function(){
            $(".ii").stop().fadeIn(1000);
        });
        $(".img").mouseleave(function(){
            $(".ii").stop().fadeOut(1000);
        })
    }

    dd();
    function dd(){
      $(".cc ul li").mouseenter(function(){
          $(" .p3").stop().slideDown(1000);
      });
        $(".cc ul li").mouseleave(function(){
            $(".p3").stop().slideUp(1000);
        })

    }
});
