var counter = 0;
var timer;

function SlideToggle() {

	counter++;
	if (counter === img.length) {
		counter = 0;
	} else {
		showImg();
	}
	console.log(counter);
}

function stopSlider() {

	clearInterval(timer);
}

function startSlider() {

	timer = setInterval(SlideToggle,2000);
}

function showImg() {

	$(".img-slide").attr("src",img[counter].url);
	$(".img-slide").attr("alt",img[counter].title);
	$("#title").html("" + img[counter].title);
}

function sliderNext() {

	console.log(counter);
	counter++;

	if (counter >= img.length) {

		counter = 0;
		showImg();

	} else {

		showImg();
	}

}

function sliderPrevious() {

	counter--;
	console.log(counter);
	
	if (counter < 0) {
		counter = img.length;

	} else {

		$(".img-slide").attr("src",img[counter].url);
		$(".img-slide").attr("alt",img[counter].title);
	}
}

function sliderRandom() {
	console.log("img length : " + img.length)
	var nbr = [];
	var i = 0;

	counter = Math.floor(Math.random() * (img.length));
	console.log(counter);
	nbr.push(counter);

	i++;
	if (i === 1) {

		if (nbr[0] === nbr[1]) {

			sliderRandom();

		}
	}

	showImg();
}

function toolBarToggle() {

	if ($(".toolbarfa").hasClass("fa-arrow-right")) {
		
		$(".toolbarfa").removeClass("fa-arrow-right");
		$(".toolbarfa").addClass("fa-arrow-down");
		$(".toolbar").show();

	} else {

		$(".toolbarfa").removeClass("fa-arrow-down");
		$(".toolbarfa").addClass("fa-arrow-right");
		$(".toolbar").hide();

	}

}

function sliderToggle() {

	if ($(".playstop").hasClass("fa-play")) {

		startSlider();
		$(".playstop").removeClass("fa-play");
		$(".playstop").addClass("fa-stop");

	} else {

		stopSlider();
		$(".playstop").removeClass("fa-stop");
		$(".playstop").addClass("fa-play");

	}

}

