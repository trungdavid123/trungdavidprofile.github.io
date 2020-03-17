const selectElement = function (element) {
	return document.querySelector(element);
};

let menuToggle = selectElement(".menu-toggle");
let body = selectElement("body");
var nav = document.getElementsByClassName("nav-link")

menuToggle.addEventListener("click", function(){
	body.classList.toggle("open");
});


function chosse(){
	for(var i = 0; i < nav.length; i++){
		nav[i].addEventListener("click", function(){
			body.classList.remove("open");
	});
   }
}
chosse();

window.sr = ScrollReveal();

sr.reveal(".animate-right", {
	origin: "right",
	duration: 1000,
	distance: "25rem",
	delay : 300
});

sr.reveal(".animate-left", {
	origin: "left",
	duration: 1000,
	distance: "25rem",
	delay : 400
});

sr.reveal(".animate-top", {
	origin: "top",
	duration: 1000,
	distance: "25rem",
	delay : 500
});

sr.reveal(".animate-bottom", {
	origin: "bottom",
	duration: 1000,
	distance: "25rem",
	delay : 300
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $("header");
	  var $color = $(".nav-link");
	  var $changeColor = $(".active::before");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $color.toggleClass('color', $(this).scrollTop() > $nav.height());
	  $changeColor.toggleClass('changeColor', $(this).scrollTop() > $nav.height());
	});
});

$('.counter-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});