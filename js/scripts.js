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
        alert("We have successfully viewed your request. Thank you for trusting us");
    });
});