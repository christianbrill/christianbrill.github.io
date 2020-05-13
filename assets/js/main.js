$(document).ready(function() {

	// Navbar menu toggle

	$(".navbar__activate-dropdown").click(function(e) {
		e.preventDefault();
		$(".navbar__dropdown").slideToggle();
	});

	// Changing navbar logo + background color

	let backgroundColor;

	let logos = ["logo.png", "logo-black.png", "logo-blue.png", "logo-brown.png", "logo-green.png", "logo-lightblue.png", "logo-orange.png", "logo-pink.png", "logo-purple.png", "logo-yellow.png"];

	let randomLogo = logos[Math.floor(Math.random() * logos.length)];

	$(".navbar__logo").css({
		"background-image": "url('assets/img/" + randomLogo + "')",
		"background-size": "cover",
		"width": "160px"
	});

	if(randomLogo == "logo.png") {
		$(".navbar__links").css("background-color", "#FF6666");
		$(".navbar__dropdown").css("background-color", "#FF6666");
	} else if(randomLogo == "logo-black.png") {
		$(".navbar__links").css("background-color", "#000");
		$(".navbar__dropdown").css("background-color", "#000");
	}

	// Lightbox options

	$('[data-fancybox]').fancybox({
		buttons: [
	    "close"
	  ]
});

});
