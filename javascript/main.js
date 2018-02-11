$(document).ready(function() {

	/**Change Sizes**/
	$(".fa-search-plus").click(function(){
		$("#captain").animate({height: '500px'});
	});

	$(".fa-search-minus").click(function(){
		$("#captain").animate({height: '100px'});
	});

	$(".fa-circle-check").click(function(){
		$("#captain").animate({height: '263px'});
	});

	/**Invisibility**/
	$('.fa-eye').click(function () {
	 	$('#captain').show(400);
	});

	$('.fa-eye-slash').click(function () {
	 	$('#captain').hide(400);
	});     

	/** Move Controls**/
	$(".fa-arrow-up").click(function(){
		$("#captain").animate({marginTop: '+=30px'},500);
	});

	$(".fa-arrow-down").click(function(){
		$("#captain").animate({marginTop: '-=30px'},500);
	});

	$(".fa-arrow-left").click(function(){
		$("#captain").animate({marginLeft: '-=30px'},500);
	});

	$(".fa-arrow-right").click(function(){
		$("#captain").animate({marginLeft: '+=30px'},500);
	});

	/*** Theme Song Audio **/
	var isNotPlaying = true;
	var songTime = 0;
	var themeSong = document.createElement('audio');
	themeSong.setAttribute('src', 'images/captainplanetsong.mp3');

	/**Play Pause Theme Song**/
	$('#togglePlay').click(function(){
		if(isNotPlaying){
			themeSong.play();
			isNotPlaying=false;
		console.log('playing...');
		} else{
			themeSong.pause();
			isNotPlaying=true;
			console.log('paused');
		}

	})

	/** Mute/Unmute Theme Song **/
	$('#toggleMute').click(function(){
		if (!themeSong.muted){
			themeSong.muted = true;
			console.log("muted");
		} else{
			themeSong.muted=false;
			console.log("sounding");
		}
	})

	/**Go Planet Audio***/
	var goPlanetAudio = new Audio ();
	goPlanetAudio.src = "images/captainplanet.wav";
	$(".fa-comment").click(function(){
		goPlanetAudio.play();
	})










});