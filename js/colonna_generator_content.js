alert('io')
var param = parseURLParams(location.href);
var currentLetter = param.lettera[0];

alert(currentLetter)

$(document).ready(function(){
	
	//cambia sfondo.
	$('body').css(
		'background-image',
		'url(\'../glob_html/materiale/colonna/sfondi/'+currentLetter+'.png\')'
	);

	//cambia la prima lettera.

	var new_path = '../glob_html/materiale/';

	if (currentLetter == 'e'){
		new_path += 'e-a/peckpeak/full.png';
	} else if (currentLetter == 'i'){
		
	} else if (currentLetter == 'o'){
		
	} else if (currentLetter == 'u'){
		
	}

	$('#animazione').css(
		'background-image',
		'url(\'../glob_html/materiale/colonna/sfondi/'+currentLetter+'.png\')'
	)
//background-image:url('../materiale/a-parole/a-i/tantaint/full.png');

})