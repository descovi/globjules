var param = parseURLParams(location.href);
var currentLetter = param.lettera[0];


$(document).ready(function(){
	
	//cambia sfondo.


	setupFirstWords()

})	

function setupFirstWords(){

	//cambia la prima lettera.
	
	var new_path_image = './materiale/'+currentLetter+'/';
	var new_path_audio = './materiale/audio/';
	var prima_parola = $('#dati-'+currentLetter+'').children().text();
				colore_per_nascondere_frecce = '#FDFA05';

	if (currentLetter == 'a-i' || currentLetter == 'a-e'){
		new_path_image += prima_parola+'/full.png';
		new_path_audio += currentLetter+'-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#FC0545';		
	}
	else if (currentLetter == 'e-a' || currentLetter == 'e-e'){	 
	                               	
	  new_path_image += prima_parola+'/full.png';
		new_path_audio += currentLetter+'-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#114FFD';

	} else if (currentLetter == 'i-e'){

	  new_path_image += prima_parola+'/full.png';
		new_path_audio += currentLetter+'-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#26D50E';


	} else if (currentLetter == 'o-e' || currentLetter == 'o-a'){

		new_path_image += prima_parola+'/full.png';
		new_path_audio += currentLetter+'-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#FA09A8';
		
	} else if (currentLetter == 'u-e'){
		new_path_image += prima_parola+'/full.png';
		new_path_audio += currentLetter+'-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#FDFA05';
	}

	$($('#player').get(0)).attr('src', new_path_audio);
	
	$('#animazione').css('background-image','url('+new_path_image+')')

	$('body').css(
		'background-image',
		'url(\'../glob_html/materiale/colonna/sfondi/'+currentLetter+'.png\')'
	);
	
}