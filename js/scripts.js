$(function() {
	$(".logo-container h1").addClass("animated slideInDown");
	$(".sub-heading").addClass("animated bounceIn");
	
	$("#main-nav li").addClass("animated slideInRight");
	
	
	// Hamburger Menu
	
	$(".toggle-nav").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$("#main-nav li").removeClass("animated slideInRight");
		$("#main-nav ul").toggleClass("mobile-nav");
	});
	
});