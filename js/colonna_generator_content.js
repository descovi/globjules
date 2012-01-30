var param = parseURLParams(location.href);
var currentLetter = param.lettera[0];


$(document).ready(function(){
	
	//cambia sfondo.


	setupFirstWords()

})

function setupFirstWords(){

	//cambia la prima lettera.
	
	var new_path_image = './materiale/'+currentLetter+'-parole/';
	var new_path_audio = './materiale/audio/';
	var prima_parola = $('#dati-'+currentLetter+'').children().text();

	if (currentLetter == 'a'){
		
		new_path_image += 'a-i/'+prima_parola+'/full.png';
		new_path_audio += 'a-i-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#FC0545';		

	}
	else if (currentLetter == 'e'){	 
	                               	
	    new_path_image += 'e-a/'+prima_parola+'/full.png';
		new_path_audio += 'e-a-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#114FFD';

	} else if (currentLetter == 'i'){

	    new_path_image += 'i-e/'+prima_parola+'/full.png';
		new_path_audio += 'e-a-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#26D50E';


	} else if (currentLetter == 'o'){

		new_path_image += 'o-e/'+prima_parola+'/full.png';
		new_path_audio += 'e-a-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#FA09A8';
		
		
	} else if (currentLetter == 'u'){
		new_path_image += 'u-e/'+prima_parola+'/full.png';
		new_path_audio += 'e-a-parole/'+prima_parola+'/1.mp3';
		colore_per_nascondere_frecce = '#FDFA05';
	}
	
	$($('#player').get(0)).attr('src', new_path_audio);
	
	$('#animazione').css('background-image','url('+new_path_image+')')

	$('body').css(
		'background-image',
		'url(\'../glob_html/materiale/colonna/sfondi/'+currentLetter+'.png\')'
	);
	
}