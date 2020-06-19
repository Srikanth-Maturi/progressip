

$(document).ready(function(){
	// Initiate Custom Cursor
	const cursor = new CustomCursor({
		color: '#fff',
		blending: 'difference',
	});

	// Home Page Top Carousel Initialization
	$(".owl-carousel-home").owlCarousel({
		items: 2,
		loop: true,
		autoplay: true,
		margin: 30,
	});

	// Testimonial Carousel Initialization
	$(".owl-carousel-testimonial").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
	});

	// Initiate Aos
	AOS.init({
		duration: 500,
		disable: 'phone',
	});

	// Update on resize
	window.addEventListener("resize", function() {
		AOS.refresh();
	});


	// Counter Up Initialization
	const countUp1 = new CountUp('stat-1', 34);
	const countUp2 = new CountUp('stat-2', 2);
	const countUp3 = new CountUp('stat-3', 53);

	// Activate counters when scrolled into view
	// Counter Item 1
	if (!countUp1.error) {
		var waypoint = new Waypoint({
		  element: document.getElementById('stat-1'),
		  handler: function(direction) {
		    countUp1.start();
		  },
		  offset: '80%'
		});
	} else {
	  console.error(countUp1.error);
	}
	// Counter Item 2
	if (!countUp2.error) {
		var waypoint = new Waypoint({
		  element: document.getElementById('stat-1'),
		  handler: function(direction) {
		    countUp2.start();
		  },
		  offset: '80%'
		});
	} else {
	  console.error(countUp2.error);
	}
	// Counter Item 3
	if (!countUp3.error) {
		var waypoint = new Waypoint({
		  element: document.getElementById('stat-1'),
		  handler: function(direction) {
		    countUp3.start();
		  },
		  offset: '80%'
		});
	} else {
	  console.error(countUp3.error);
	}

	// Post Like/ Comment Like Script (Add class "liked")
	$('#like_post, #like_comment').on('click', function() {
		$(this).toggleClass('liked');
	});

});