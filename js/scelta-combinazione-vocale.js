
var pagina = new Object();

pagina.parametri = parseURLParams(location.href)


var lettera_scelta = pagina.parametri.lettera


$(document).ready(start)


function start(e){


$('.cont').each(function(index){
	$(index).hide();
})



	$('#lettera_'+lettera_scelta).show();


}