$(document).ready(function() {

	$(".navbar__activate-dropdown").click(function(e) {
		e.preventDefault();
		$(".navbar__dropdown").slideToggle();
	});

	$('[data-fancybox]').fancybox({
		buttons: [
	    "close"
	  ]
});

});
