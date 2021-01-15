(function(window,$) {

	$(init);

	function init() {

		console.log('hello world');

		$(".hamburger-button").on('click',function(){

			$(".hamburger-button").toggleClass('active');
			$(".header-sp-area").toggleClass('active');
			$(".main").toggleClass('active');
			$(".header-nav").toggleClass('open');
		});
	}

})(window,jQuery);
