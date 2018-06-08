'use strict';

$(".toolbar").hide();

startSlider();

//**********BTN EVENT*****************//
$( "#slider-toggle" ).click(function() {

	sliderToggle();
});

$( "#slider-previous" ).click(function() {
	
	sliderPrevious();

});

$( "#slider-next" ).click(function() {
	
	sliderNext();
});

$( "#slider-random" ).click(function() {
	
	sliderRandom();
});

$( "#toolbar-toggle" ).click(function() {
	
	toolBarToggle();

});

//***********KEYS EVENTS************//
$(document).keydown (function(e) {
    switch(e.which) {
        case 37: // left
        	sliderPrevious();
        break;

        case 39: // right
        	sliderNext();
        break;
    }
});