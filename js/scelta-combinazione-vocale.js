
var pagina = new Object();
pagina.parametri = parseURLParams(location.href)
var lettera_scelta = pagina.parametri.lettera


Zepto(start)


function start(e){
	$('.cont').hide()
	$('#lettera_'+lettera_scelta).show();
	console.log(lettera_scelta)
}