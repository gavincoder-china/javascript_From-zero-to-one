var next = document.getElementById("nextBox"),
	wrapper = document.getElementById("wrapper"),
	gallery = document.createElement("gallery"),
	range = document.getElementById("range"),
	count = 0;

gallery.id = "gallery";

//Slide function controls the building of each slie
function slide() {
	var imgs = ["images/1.jpg", "images/2.jpg", "images/3.jpg","images/5.jpg"];

	var topL = document.createElement("div"),
		topR = document.createElement("div"),
		bottomL = document.createElement("div"),
		bottomR = document.createElement("div"),
		threeDside = document.createElement("div");
	var blocks = [topL, topR, bottomL, bottomR, threeDside];

	topL.className += "topL";
	topR.className += "topR";
	bottomL.className += "bottomL";
	bottomR.className += "bottomR";
	threeDside.className += "threeDside";

	wrapper.appendChild(gallery);

	for (i = 0; i < blocks.length; i++) {
		var child = document.createElement("img");
		child.src = imgs[count];
		child.className += "child";
		gallery.appendChild(blocks[i]);
		blocks[i].appendChild(child);
	}

	var topL2 = document.createElement("div"),
		topR2 = document.createElement("div"),
		bottomL2 = document.createElement("div"),
		bottomR2 = document.createElement("div"),
		threeDside2 = document.createElement("div");

	topL2.className += "topL2";
	topR2.className += "topR2";
	bottomL2.className += "bottomL2";
	bottomR2.className += "bottomR2";
	threeDside2.className += "threeDside2";

	var blocks2 = [topL2, topR2, bottomL2, bottomR2, threeDside2];
	for (i = 0; i < blocks2.length; i++) {;
		var child2 = document.createElement("img");
		child2.src = imgs[count];
		child2.className += "child2";
		gallery.appendChild(blocks2[i]);
		blocks2[i].appendChild(child2);
	}

	if (count >= imgs.length - 1) {
		count = 0;
	} else {
		count++;
	}
	setTimeout(function() {
		gallery.classList.add('shadow');
	}, 790)
	clicked = true;
}

var clicked = false;

//Listener for button click
next.addEventListener("click", function() {

	gallery.innerHTML = "";
	gallery.classList.remove('shadow');
	slide();

})

//Listener for range input
range.addEventListener("input", function() {
	var x = 15;
	var z = -10;
	gallery.style.webkitTransform = 'rotateX(' + x + 'deg) rotateY(' + Math.floor(this.value) + 'deg) rotateZ(' + z + 'deg)';
}, false);

//Initial Click
setTimeout(function() {
	next.click();
}, 0)

//Auto click, reset when user clicks
var autoClicker = setInterval(function() {
		next.click();
}, 3000)

document.getElementById('nextBox').onmouseover = function() {
	clearInterval(autoClicker);
};

document.getElementById('nextBox').onmouseout = function() {
	autoClicker = setInterval(function() {
			next.click();
	}, 3000)
};


var bgmusic = document.getElementById('bgmusic');
bgmusic.addEventListener('canplay', function(){
    this.play();
}, false);
window.addEventListener('load', function(){
    window.addEventListener('touchstart', once, false);
}, false);
function once(){
    bgmusic.play();
    window.removeEventListener('touchstart', once, false);
}
