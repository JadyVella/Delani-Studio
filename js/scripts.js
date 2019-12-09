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
   

    $("#subscribe").on("click",function() {
        var names = document.getElementById("mce-FNAME").value;
        alert("Hi "+names+". We have viewed your message and want to thank you for reaching to us");

    });
});

$(document).ready(function() {
    $(".jpg1").hover(function() {
        $(".hover1").toggle();
    })
});