(function(window,$) {

	$(init);

	function init() {

		console.log('hello world');

		$(".hamburger-button").on('click',function(){

			$(".hamburger-button").toggleClass('active');
			$(".header-nav").toggleClass('open');
		});

		$(window).on('scroll',function() {

			var scrollTop = $(window).scrollTop();
		 	var position = $(window).height() * 1.2;

			if (scrollTop > position) {
				$('.pagetop').addClass('active');
			} else {
				$('.pagetop').removeClass('active');
			}

		});

		$('a[href^="#"]').on('click',function() {

			var speed = 500;
			var href  = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;

		});
	}

})(window,jQuery);
