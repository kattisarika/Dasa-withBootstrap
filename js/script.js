jQuery(document).ready(function($) {
		$('.showsong1').hide()
		$('a[href^="#"]').on('click', function(event) {
			$('.showsong').hide();
			$('.showsong1') .hide();
   			var target = $(this).attr('href');
    		$('.showsong1'+target).toggle();
		});

	});	