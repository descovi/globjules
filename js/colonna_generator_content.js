
var param = parseURLParams(location.href);
var currentLetter = param.lettera[0];

$(document).ready(function(){
	
	//cambia sfondo
	$('body').css('background-image','url(\'../glob_html/materiale/colonna/sfondi/'+currentLetter+'.png\')');
		
})