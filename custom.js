window.onload = function() {
  //addPlayButton()
//  if (document.cookie.replace(/(?:(?:^|.*;\s*)videoShown\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
  	showVideo()
    document.cookie = "videoShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
//  }
  button = document.getElementById("new-listing-link");
  button.innerHTML = "Become a Jiber";

  document.getElementsByClassName("home-categories-main")[0].innerHTML="All locations"

 filterSelector=document.getElementById("home_toolbar-select-share-type")
  //filterSelector.getElementsByClassName("toggle-header")[0].innerHTML="All"
  document.getElementsByClassName("home-toolbar-share-type-menu")[0].getElementsByTagName("a")[0].innerHTML="All"
}


function addPlayButton() {
	button = document.createElement("div")
	button.setAttribute("class", "videoplay")
	document.body.appendChild(button)

	button.innerHTML = `
<svg class="defs">
  <defs>
    <path id="play-button-shape"  d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M31.672,26.828l-9.344,9.344
    C20.771,37.729,19.5,37.2,19.5,35V13c0-2.2,1.271-2.729,2.828-1.172l9.344,9.344C33.229,22.729,33.229,25.271,31.672,26.828z"/>
  </defs>
</svg>

<div class="buttons">
  <!-- if we needed to change height/width we could use viewBox here -->
  <svg class="button" id="play-button">
    <use xlink:href="#play-button-shape">
  </svg>
</div>`

}

function showVideo() {

  play = document.createElement("img")
  play.setAttribute("class", "play")
  play.setAttribute("src", "https://github.com/jpontoppidan/cj-resources/raw/master/images/play.png")
  document.body.appendChild(play)

	$(window).resize(function(){
		resizeVideo();
	});
	$(document).click(closeVideo)
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27`
		   closeVideo()
		}
	});

  	videoId = "eyUagNQoFhk"
	overlay = document.createElement("div")
	overlay.setAttribute("class", "overlay")
	document.body.appendChild(overlay)

	youtube = document.createElement("div");
	youtube.setAttribute("class", "youtube");
	close = document.createElement("a");
	close.setAttribute("class", "boxclose");
	youtube.appendChild(close);
	video = document.createElement("iframe");
	youtube.appendChild(video)
	video.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");

	overlay.appendChild(youtube)
	resizeVideo();
}


function closeVideo() {
    $('.overlay').hide()
    $('.overlay').remove()
}


function resizeVideo() {
	$('.youtube').css({
        left: ($(window).width() - $('.youtube').outerWidth())/2,
        top: ($(window).height() - $('.youtube').outerHeight())/2
    });
}
