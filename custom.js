window.onload = function() {
  addPlayButton()
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
  $('.header-left.header-logo-container').append('<img class="play" src="https://github.com/jpontoppidan/cj-resources/raw/master/images/play.png" />')
  alert("djsakdjsal")
}

function showVideo() {

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
