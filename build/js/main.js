function updater(e,t,i,a){function n(){var r=new Date,l=o-r,s=l%1e3;l=Math.floor(l/1e3);var p=l%60;p<10&&(p="0"+p),l=Math.floor(l/60);var u=l%60;u<10&&(u="0"+u),l=Math.floor(l/60);var m=l%24;m<10&&(m="0"+m);var y=Math.floor(l/24);e.innerHTML=y,t.innerHTML=m,i.innerHTML=u,a.innerHTML=p,setTimeout(n,s)}var o=new Date(2018,3,8);setTimeout(n,0)}jQuery(document).ready(function(){$(".subscribe_form").submit(function(){return $(".popup,.popup_overlay").fadeIn(400),$(".popup_close,.popup_overlay").click(function(){$(".popup,.popup_overlay").fadeOut(400)}),!1}),$(".home_btn").click(function(){$(".popup_partner,.popup_overlay").fadeIn(400)}),$(".popup_close,.popup_overlay").click(function(){$(".popup_partner,.popup_overlay").fadeOut(400)}),$(".scroller").click(function(){return $("body,html").animate({scrollTop:0},800),!1});var e=function(){var t=$(window).scrollTop()+$(window).height(),i=$(".animatable");0==i.size()&&$(window).off("scroll",e),i.each(function(e){var i=$(this);i.offset().top+i.height()-20<t&&i.removeClass("animatable").addClass("animated")})};$(window).on("scroll",e),$(window).trigger("scroll");var t=$(".services_slider");t.isotope({filter:".colors",animationOptions:{duration:750,easing:"linear",queue:!1}}),$(".item").click(function(){$(".active_item").removeClass("active_item"),$(this).addClass("active_item");var e=$(this).attr("data-filter");return t.isotope({filter:e,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1})}),updater(document.getElementById("days"),document.getElementById("hours"),document.getElementById("minutes"),document.getElementById("seconds")),function(){function e(){var e=void 0,t=document.querySelector("#map"),i={lat:55.681284,lng:37.68412},a={center:i,zoom:11,styles:[{featureType:"administrative",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:"50"},{visibility:"simplified"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{lightness:"30"}]},{featureType:"road.local",elementType:"all",stylers:[{lightness:"40"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{lightness:-25},{saturation:-100}]}],disableDefaultUI:!0,scrollwheel:!1};e=new google.maps.Map(t,a);new google.maps.Marker({position:{lat:55.681284,lng:37.68412},map:e,icon:"img/pointer.png"});google.maps.event.addDomListener(window,"resize",function(){var t=e.getCenter();google.maps.event.trigger(e,"resize"),e.setCenter(t)})}document.addEventListener("DOMContentLoaded",e)}();