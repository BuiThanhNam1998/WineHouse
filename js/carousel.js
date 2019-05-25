$(document).ready(function() {
	// main
 	$("#owl-main").owlCarousel({
		loop: true,
	    responsiveClass: true, 
	    // autoplay: true,
	    autoHeight: true,
	    responsive:{
	        0:{
	            items:1,
	            nav: false,
	            dots: true
	        },
	        600:{
	            items:1,
	           	nav: false,
	            dots: true
	        },
	        1000:{
	            items:1,
	            nav: false,
	            dots: true
	        },
	        1200:{
	        	items:1,
	        	nav: false,
	            dots: true
	        }
	    }
 	});
 	//best-like
 	$("#owl-best-like").owlCarousel({
		loop: false,
		stagePadding: 20,
	    responsiveClass: true, 
	    autoplay: false,
	    margin: 30,
	    navText: [
		    "<span class='nav-icon'>prev</span>",
		    "<span class='nav-icon'>next</span>"
		    ],
	    responsive:{
	        0:{
	            items:2,
	            nav: true,
	            dots: false
	        },
	        600:{
	            items:2,
	           	nav: true,
	            dots: false
	        },
	        1000:{
	            items:4,
	            nav: true,
	            dots: false
	        },
	        1200:{
	        	items:4,
	        	nav: true,
	            dots: false
	        }
	    }
 	});
 	//best-sale
 	$("#owl-best-sale").owlCarousel({
		loop: false,
		stagePadding: 20,
	    responsiveClass: true, 
	    autoplay: false,
	    margin: 30,
	    navText: [
		    "<span class='nav-icon'>prev</span>",
		    "<span class='nav-icon'>next</span>"
		    ],
	    responsive:{
	        0:{
	            items:2,
	            nav: true,
	            dots: false
	        },
	        600:{
	            items:2,
	           	nav: true,
	            dots: false
	        },
	        1000:{
	            items:5,
	            nav: true,
	            dots: false
	        },
	        1200:{
	        	items:5,
	        	nav: true,
	            dots: false
	        }
	    }
 	});
 	//best-sale-2
 	$("#owl-best-sale-2").owlCarousel({
		loop: false,
		stagePadding: 20,
	    responsiveClass: true, 
	    autoplay: false,
	    margin: 30,
	    navText: [
		    "<span class='nav-icon'>prev</span>",
		    "<span class='nav-icon'>next</span>"
		    ],
	    responsive:{
	        0:{
	            items:2,
	            nav: true,
	            dots: false
	        },
	        600:{
	            items:2,
	           	nav: true,
	            dots: false
	        },
	        1000:{
	            items:5,
	            nav: true,
	            dots: false
	        },
	        1200:{
	        	items:5,
	        	nav: true,
	            dots: false
	        }
	    }
 	});
 	// brand
 	$("#owl-brand").owlCarousel({
		loop: false,
		stagePadding: 20,
	    responsiveClass: true, 
	    autoplay: false,
	    autoHeight: true,
	    margin: 30,
	    navText: [
		    "<span class='nav-icon'>prev</span>",
		    "<span class='nav-icon'>next</span>"
		    ],
	    responsive:{
	        0:{
	            items:2,
	            nav: true,
	            dots: false
	        },
	        600:{
	            items:2,
	           	nav: true,
	            dots: false
	        },
	        1000:{
	            items:7,
	            nav: true,
	            dots: false
	        },
	        1200:{
	        	items:7,
	        	nav: true,
	            dots: false
	        }
	    }
 	});
});