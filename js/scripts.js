$(document).ready(function() {
    $("#design").on("click",function() {
        $(".designAlign").toggle();
        $("#design").hide();
        $(".designAlign").on("click",function() {
            $("#design").show();
            $(".designAlign").hide();
        });
    });

    $("#dev").on("click",function() {
        $(".devAlign").toggle();
        $("#dev").hide();
        $(".devAlign").on("click",function() {
            $("#dev").show();
            $(".devAlign").hide();
        });
    });

    $("#product").on("click",function() {
        $(".proAlign").toggle();
        $("#product").hide();
        $(".proAlign").on("click",function() {
            $("#product").show();
            $(".proAlign").hide();
        });
    });
});

$(document).ready(function() {
    $(".jpg1").hover(function() {
        $(".hover1").toggle();
    })
});