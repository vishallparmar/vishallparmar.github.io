$("#revealcircle").mouseover(
    function() {
        $(".circle1").addClass("background-none");
        $(".circle2").addClass("background-none");
        $(".circle3").addClass("background-none");
        $(".circle4").addClass("background-none");
        $(".inner-circle1").addClass("inner-circle-hover");
    }
);

$("#revealcircle").mouseout(
    function() {
        $(".circle1").removeClass("background-none");
        $(".circle2").removeClass("background-none");
        $(".circle3").removeClass("background-none");
        $(".circle4").removeClass("background-none");
        $(".inner-circle1").removeClass("inner-circle-hover");
    }
);

$(".red-ham").mouseover(
    function() {
        $(".red-ham-drop").css("display", "block");
    }
);

$(".red-ham").mouseout(
    function() {
        $(".red-ham-drop").css("display", "none");
    }
);

$(".yellow-ham").mouseover(
    function() {
        $(".yellow-ham-drop").css("display", "block");
    }
);

$(".yellow-ham").mouseout(
    function() {
        $(".yellow-ham-drop").css("display", "none");
    }
);

$(".skyblue-ham").mouseover(
    function() {
        $(".skyblue-ham-drop").css("display", "block");
    }
);

$(".skyblue-ham").mouseout(
    function() {
        $(".skyblue-ham-drop").css("display", "none");
    }
);

$(".black1-ham").mouseover(
    function() {
        $(".black1-ham-drop").css("display", "block");
    }
);

$(".black1-ham").mouseout(
    function() {
        $(".black1-ham-drop").css("display", "none");
    }
);

$(".black2-ham").mouseover(
    function() {
        $(".black2-ham-drop").css("display", "block");
    }
);

$(".black2-ham").mouseout(
    function() {
        $(".black2-ham-drop").css("display", "none");
    }
);