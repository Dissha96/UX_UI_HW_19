$(function () {
    $(".btn_header").hover(function () {
        $(this).addClass("hovered");
    },
        function () {
            $(this).removeClass("hovered");
        });



    $(".nav .pro").hover(function () {
        $(this).addClass('before');
        $(this).css("transform", "scale(1.2)");
    },
        function () {
            $(this).removeClass("before");
            $(this).css("transform", "scale(1)");
        });


    $(".view").hover(function () {
        $(this).css("border", "2px solid black");
        $(this).children(".viewtext").css("color", "black");
    },
        function () {
            $(this).css("border", "2px solid #EC4B2B");
            $(this).children(".viewtext").css("color", "#B85A25");
        });

    $(".s1gallery,.s2gallery,.s3img1,.s3img2,.s3img3,.s3img4").hover(function () {
        $(this).css("transform", "scale(1.07)");
        $(this).css("transition", "all 0.5s ease");
    },
        function () {
            $(this).css("transform", "scale(1)");
            $(this).css("transition", "all 0.5s ease");
        });



    $(".wwf").hide();
    $(".proj").click(function () {
        $(".wwf").slideToggle();
    });


});