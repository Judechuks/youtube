
function callup() {
	barSize = 639;
	vid = document.getElementById('vid' ) ;
	playButton = document.getElementById('playButton' );
	stopButton = document.getElementById('stopButton' ) ;
	forButton = document.getElementById('fButton' ) ;
	backButton = document.getElementById('bButton' ) ;
	bar = document.getElementById('progressContainer' ) ;
	progressBar = document.getElementById('progressBar') ;
	vHighButton = document.getElementById('vHighButton' ) ;
	vLowButton = document.getElementById('vLowButton') ;
	
	playButton.addEventListener('click', playOrPause, false) ;
	bar.addEventListener('click', clickedBar, false) ;
	stopButton.addEventListener('click', stopPlay, false);
	forButton.addEventListener('click', forward, false);
	backButton.addEventListener('click', backward, false);
	vHighButton.addEventListener('click', increaseVol, false);
	vLowButton.addEventListener('click', decreaseVol, false);
}

function playOrPause () {
	if(!vid.paused && !vid.ended) {
	vid.pause();
	playButton.innerHTML='Play' ;
	window.clearInterval(updateBar) ;
	}  
	else {
	vid.play();
	playButton.innerHTML='Pause';
	updateBar = setInterval(update, 500) ;
	} 
}

function stopPlay() {
	vid.pause();
	vid.currentTime = 0; /* or you can use *vid.load*/
	playButton.innerHTML='Play';
}

function forward() {
	vid.currentTime = vid.currentTime + 10;
}

function backward() {
	vid.currentTime = vid.currentTime - 10;
}

function increaseVol() {
	vid.volume = vid.volume + 0.25;
}

function decreaseVol() {
	vid.volume = vid.volume - 0.25;
}


function update() {
	if (!vid.ended) {
	var progressSize = parseInt(vid.currentTime*barSize/vid.duration) ;
	progressBar.style.width = progressSize+'px' ;
	} 
	else {
	progressBar.style.width = '0px' ;
	playButton.innerHTML = 'Play' ;
	window.clearInterval(updateBar) ;
	} 
} 

function clickedBar(e) {
	var mouseOfX = e.pageX-bar.offsetLeft;
	var newStartTime = mouseOfX*vid.duration/barSize;
	vid.currentTime = newStartTime;
	progressBar.style.width = mouseOfX+'px';
}

window.addEventListener("load", callup, false);
/*or you can use this code *window.onload=callup;*/