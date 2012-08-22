var resizer = function() {
    if ($(window).width() < 800 && $(window).width() > 480) {
			$('[role="navigation"]').hide();
    }
    if ($(window).width() >= 800) {
			$('[role="navigation"]').show();
			$(".menu-button").removeClass("active");
    }
};



jQuery(document).ready(function($) {
		$('.menu-button').click(function() {
			$("[role='navigation']").fadeToggle('fast');	
			$(this).toggleClass("active");				
		});	
		// Call once to set.
		resizer();
		// Call on resize.
		$(window).on('resize', resizer);
		// Target your .container, .wrapper, .post, etc.
		$(".entry-content").fitVids();									
});