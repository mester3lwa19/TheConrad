$(document).ready(function(){
    /* start header */
        var header = $(".header");
        header.height($(window).height());
       
        $(window).resize(function(){
            header.height($(window).height());
        });
         // start add active class to links
    
         $(".links li a").click(function(){
             $(this).parent().addClass("active").siblings().removeClass("active")
         })
         // end add active class to links

         // smooth scroll to div 
    $(".links li a").click(function(){
        $("html, body").animate({
            scrollTop:$("#" + $(this).data("value")).offset().top
        },1000)
    });
    /* nicescroll */ 
    $("html").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "1px solid #1abc9c "
    });
    /* start authour */
    $(".btn1").click(function() {
        $(".one").show()
        $(".two").hide()
    });
    $(".btn2").click(function() {
        $(".two").show()
        $(".one").hide()
    });
    /* end authour */
    /* start show p in solution section */
    $(".first").css("display","block");
    $(".accorden h3").click(function(){
        $(this).next().slideToggle();
        $(".accorden p").not($(this).next()).slideUp();
    });
    /* end show p in solution section */
    /* start countto plugin */
    $(".download").click(function() {
        $('.timer').countTo();
    });
    /* end countto plugin */
    /* start mixitup */
    $('.allimg').mixItUp(); 
    /* end mixitup */
});