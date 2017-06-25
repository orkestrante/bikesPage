$(function() {
    $("header-show").fadeIn(500).addClass("nav ul li");
//    $("nav ul li:nth-of-type(odd)").hover(function(){
//    $("header ul li i.fa").css("display", "inline-block");
//    })
    var mobileMenu = $(".mobileMenu");
    var menuOpen = false;
    $(".menu").on("click", function() {
        if (menuOpen) {
            mobileMenu.css({"left": "70%", "display": "block"});
            menuOpen = false;
        } else {
            mobileMenu.css("display", "none");
            menuOpen = true;
        }
    });
    $("#get-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#top-page").offset().top
    }, 2000);
    });
    var offset = 250;
    var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $("#get-to-top").fadeIn(duration);
        } else {
            $("#get-to-top").fadeOut(duration);
        }
    });
});
