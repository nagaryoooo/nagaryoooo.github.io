$('.back').hover(
    function() {
        $('.back').next().children('.back_text').css({transform: "scale(1.4,1.4)"});
    },
    function() {
        $('.back').next().children('.back_text').css({transform: "scale(1,1)"});
    }
);
$('.next').hover(
    function() {
        $('.next').prevAll().children('.next_text').css({transform: "scale(1.4,1.4)"});
    },
    function() {
        $('.next').prevAll().children('.next_text').css({transform: "scale(1,1)"});
    }
);
$('.back_last').hover(
    function() {
        $('.back_last').next().children('.back_text_last').css({transform: "scale(1.4,1.4)"});
    },
    function() {
        $('.back_last').next().children('.back_text_last').css({transform: "scale(1,1)"});
    }
);
$('.next_last').hover(
    function() {
        $('.next_last').prevAll().children('.next_text_last').css({transform: "scale(1.4,1.4)"});
    },
    function() {
        $('.next_last').prevAll().children('.next_text_last').css({transform: "scale(1,1)"});
    }
);