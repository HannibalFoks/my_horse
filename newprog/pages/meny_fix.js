 jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>55){
	                $('#navigaror').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<55){
	                $('#navigaror').removeClass('fixed');
	            }
	        });
	    });