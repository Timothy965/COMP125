//
//
// Developed by Timothy Issac Thomas
//
//Copyright 2022, All rights reserved

var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
var favorite = $('.favoritef');
var update = $('#btn-update');

$("#fphotos").hide();
$("#f1").hide();
$("#f2").hide();
$("#f3").hide();
$("#f4").hide();
$("#close").hide();


$('.photo-overlay1').hide();
$('.photo-overlay2').hide();
$('.photo-overlay3').hide();
$('.photo-overlay4').hide();

$(function () {
    $(document).click('click', function (e) {
        $(this).html('<i class="fa fa-heart" aria-hidden="true"></i> You liked this');
        $(this).children('.fa-heart').addClass('animate-like');
    });
});



$('.bfavorite1').click(function (e) {
    $("#fphotos").show();
    $("#f1").show();
    if ($("#f1").hasClass("added")) {
        $('#f1').removeClass("added");
        $('.bfavorite1').html('Make it favorite!')
        $("#f1").hide();

    }
    else {
        $("#f1").addClass("added");
        $('.bfavorite1').html('Remove from favorites');

    }


});

$('.bfavorite2').click(function (e) {
    $("#fphotos").show();
    $("#f2").show();
    if ($("#f2").hasClass("added")) {
        $('#f2').removeClass("added");
        $('.bfavorite2').html('Make it favorite!')
        $("#f2").hide();

    }
    else {
        $("#f2").addClass("added");
        $('.bfavorite2').html('Remove from favorites');
    }
});


$('.bfavorite3').click(function (e) {
    $("#fphotos").show();
    $("#f3").show();
    if ($("#f3").hasClass("added")) {
        $('#f3').removeClass("added");
        $('.bfavorite3').html('Make it favorite!')
        $("#f3").hide();

    }
    else {
        $("#f3").addClass("added");
        $('.bfavorite3').html('Remove from favorites');
    }
});


$('.bfavorite4').click(function (e) {
    $("#fphotos").show();
    $("#f4").show();
    if ($("#f4").hasClass("added")) {
        $('#f4').removeClass("added");
        $('.bfavorite4').html('Make it favorite!')
        $("#f4").hide();

    }
    else {
        $("#f4").addClass("added");
        $('.bfavorite4').html('Remove from favorites');
    }

});

$('.thumb1').click(function (event) {

    event.preventDefault();



    $('.photo-overlay1').show();
    $('#close').show();
    $('.c-slider').hide();

});
$('#close').click(function () {
    $('.photo-overlay1').hide();
    $('.c-slider').show();
    $('#close').hide();
    $('#favoritet').show();



});


$('.thumb2').click(function (event) {

    event.preventDefault();
    $('#close').show();


    $('.photo-overlay2').show();
    $('.c-slider').hide();

});
$('#close').click(function () {
    $('.photo-overlay2').hide();
    $('.c-slider').show();
    $('#close').hide();
    $('#favoritet').show();

});


$('.thumb3').click(function (event) {
    event.preventDefault();
    $('#close').show();

    $('.photo-overlay3').show();
    $('.c-slider').hide();

});
$('#close').click(function () {
    $('.photo-overlay3').hide();
    $('.c-slider').show();
    $('#close').hide();
    $('#favoritet').show();

});
$('.thumb4').click(function (event) {

    event.preventDefault();
    $('#close').show();
    $('.photo-overlay4').show();
    $('.c-slider').hide();

});
$('#close').click(function () {
    $('.photo-overlay4').hide();
    $('.c-slider').show();
    $('#close').hide();
    $('#favoritet').show();

});


//Move last image to the first place
$('#slider section:last').insertBefore('#slider section:first');
//Show first image with a margin of -100%
slider.css('margin-left', '-' + 100 + '%');

setInterval(function () {
    moverD();
    // Do something every 5 seconds
}, 5000);
function moverD() {
    slider.animate({
        marginLeft: '-' + 200 + '%'
    }, 700, function () {
        $('#slider section:first').insertAfter('#slider section:last')
        slider.css('margin-left', '-' + 100 + '%');

    });
};

function moverI() {
    slider.animate({
        marginLeft: 0
    }, 700, function () {
        $('#slider section:last').insertBefore('#slider section:first')
        slider.css('margin-left', '-' + 100 + '%');

    });
};
function update() {
    slider.animate({
        marginLeft: 0
    }, 700, function () {
        $('#slider section:first');
    });
};





siguiente.on('click', function () {
    moverD();
});
anterior.on('click', function () {
    moverI();
});
update.on('click', function () {
    update();
});
