
var pagina = new Object();
pagina.parametri = parseURLParams(location.href)


$(document).ready(start)


function start(e){
	$('.cont').each(function(index){
		//console.log('cuai')
		//$(index).hide();
	})
	$('#lettera_'+pagina.parametri.lettera).show();

}