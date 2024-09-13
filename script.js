if($(".offer-card2")) {
    $(".prev-offer").click(function() {
        $(".offer-card1").css({
            "display": "flex"
        })
        $(".offer-card2").css({
            "display": "none"
        })
    });
}

if($(".offer-card1").is(":visible") && !$(".offer-card3").is(":visible")) {
    $(".next-offer").click(function() {
        $(".offer-card1").css({
            "display": "none"
        })
        $(".offer-card2").css({
            "display": "flex"
        })
    });
}

$(".fa-bars").click(function (){
    $(".navbar").css({
        "padding": "14px 25px"
    });
   $(".navbar-logo").css({
       "display": "none",
       "animation": "slide-out-left 0.5s forwards"
   });
   $(".navbar-content a").css({
       "display": "flex",
       "animation": "slide-in-from-left 0.5s forwards"
   });
   $(".fa-bars").css({
       "display": "none"
   });
   $(".fa-xmark").css({
       "display": "flex",
   });
});

$(".fa-xmark").click(function (){
    $(".navbar-logo").css({
        "display": "flex",
        "animation": "slide-in-from-left 0.5s forwards"
    });
    $(".navbar-content a").css({
        "display": "none",
        "transition": "ease-out 2s"
    });
    $(".fa-bars").css({
        "display": "flex"
    });
    $(".fa-xmark").css({
        "display": "none",
    });
});