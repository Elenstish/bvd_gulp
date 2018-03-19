jQuery(document).ready(function() {

	// --------- VALIDATION POP UP 

	$(".subscribe_form").submit(function(){

		$('.popup,.popup_overlay').fadeIn(400); 

		$('.popup_close,.popup_overlay').click(function(){
	    $('.popup,.popup_overlay').fadeOut(400); 
	});
	return false 
	})

		$('.home_btn').click(function(){
		$('.popup_partner,.popup_overlay').fadeIn(400); 
	});
	$('.popup_close,.popup_overlay').click(function(){
		$('.popup_partner,.popup_overlay').fadeOut(400); 
	});

// --------- SCROLL UP

	$('.scroller').click(function () {
		$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
	});	

 // -------- ANIMATION

    var doAnimations = function() {

        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        if ($animatables.size() == 0) {
            $(window).off('scroll', doAnimations);
        }

        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

// --------- ISOTOPE

    var $container = $('.services_slider');
    $container.isotope({
        filter: '.colors',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.item').click(function(){
        $('.active_item').removeClass('active_item');
        $(this).addClass('active_item');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

});

//-------TIMER 

function updater(d, h, m, s) {
	var baseTime = new Date(2018, 3, 8);

	function update() {

		var cur = new Date();
		var diff = baseTime - cur;
		var millis = diff % 1000;
			diff = Math.floor(diff/1000);
		var sec = diff % 60;
			if(sec < 10) sec = "0"+sec;
			diff = Math.floor(diff/60);
		var min = diff % 60;
			if(min < 10) min = "0"+min;
			diff = Math.floor(diff/60);
		var hours = diff % 24;
			if(hours < 10) hours = "0"+hours;
		var days = Math.floor(diff / 24);

		d.innerHTML = days;
		h.innerHTML = hours;
		m.innerHTML = min;
		s.innerHTML = sec;

		setTimeout(update, millis);
	}
	setTimeout(update, 0);
}

updater(
	document.getElementById("days"),
	document.getElementById("hours"),
	document.getElementById("minutes"),
	document.getElementById("seconds")
);


// ----------- MAP

(function () {

    function initMap() {
        var map = void 0;
        var mapContainer = document.querySelector('#map');
        var mapCoordinates = { lat: 55.681284, lng: 37.684120 };
        var mapOptions = {
            center: mapCoordinates,
            zoom: 11,
            styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
],
            disableDefaultUI: true,
            scrollwheel: false
        };

        map = new google.maps.Map(mapContainer, mapOptions);

        var marker = new google.maps.Marker({
            position: { lat: 55.681284, lng: 37.684120 },
            map: map,
            icon: "img/pointer.png"
        });

        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }

    document.addEventListener('DOMContentLoaded', initMap);
})();

