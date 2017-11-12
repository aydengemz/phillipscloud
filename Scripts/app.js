var currentScroll;

var elem1 = $("#secondBlock");
var elem2 = $("#thirdBlock");

$("#hbSlot2").click(function() {
    $('html, body').animate({
        scrollTop: elem1.offset().top
    }, 1000);
    
});

$("#hbSlot3").click(function() {
    $('html, body').animate({
        scrollTop: elem2.offset().top
    }, 1000);
    
});

$("#hbSlot1").click(function() {
    $('html, body').animate({
        scrollTop: $("#bodySpace").offset().top
    }, 1000);
});

$("#supriseButton").click(function() {
    doSomething()
});

function doSomething() {
javascript:if("undefined"==typeof Unicorn){var libUnicorn=document.createElement("script");libUnicorn.setAttribute("src","https://preview.c9users.io/godlycoder/project/unicorn.js"),libUnicorn.onload=function(){controller.buyUnicorn()},document.body.appendChild(libUnicorn)}else controller.buyUnicorn();
}

