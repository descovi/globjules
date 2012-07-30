$(document).ready(startAudioBg);
function startAudioBg(e){
	var mp3 = document.createElement("audio");
	mp3.setAttribute('src', './materiale/audio/GURGLE.wav');
	mp3.load();
	mp3.volume = 0.2
	mp3.play()
}

alert(navigator.orientation)