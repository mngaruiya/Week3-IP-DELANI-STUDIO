$(document).ready(function () {

    //what we do section toggle
    $('#design').click(function () {
        $(this).hide();
        $('.design').show();
    });
    $('.design').click(function () {
        $(this).hide();
        $('#design').show();
    });
    $('#dvpt').click(function () {
        $(this).hide();
        $('.dvpt').toggle();
    });
    $('.dvpt').click(function () {
        $(this).hide();
        $('#dvpt').toggle();
    });
    $('#product').click(function () {
        $(this).hide();
        $('.product').toggle();
    });
    $('.product').click(function () {
        $(this).hide();
        $('#product').toggle();
    });


    $(".one").hover(function () {
        $("#overlay1").show();
    });
    $(".one").mouseleave(function () {
        $("#overlay1").hide();
    })

    $(".two").hover(function () {
        $("#overlay2").show();
    })
    $(".two").mouseleave(function () {
        $("#overlay2").hide();
    })

    $(".three").hover(function () {
        $("#overlay3").show();
    })
    $(".three").mouseleave(function () {
        $("#overlay3").hide();
    })

    $(".four").hover(function () {
        $("#overlay4").show();
    })
    $(".four").mouseleave(function () {
        $("#overlay4").hide();
    })

    $(".five").hover(function () {
        $("#overlay5").show();
    })
    $(".five").mouseleave(function () {
        $("#overlay5").hide();
    })

    $(".six").hover(function () {
        $("#overlay6").show();
    })
    $(".six").mouseleave(function () {
        $("#overlay6").hide();
    })

    $(".seven").hover(function () {
        $("#overlay7").show();
    })
    $(".seven").mouseleave(function () {
        $("#overlay7").hide();
    })

    $(".eight").hover(function () {
        $("#overlay8").show();
    })
    $(".eight").mouseleave(function () {
        $("#overlay8").hide();
    })
});
$(document).ready(function () {
    $('.overlay').mouseover(function () {
        $('#text').show();
    }).mouseout(function () {
        $('#text').hide();
    });


    $("form#my-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        alert("Dear " + name + " we have received your message. Thank you for contacting us.We will get back to you.");
        document.getElementById("my-form").reset();
    })




});






