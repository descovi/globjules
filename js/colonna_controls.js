

$('#freccia_su').bind('click',function(){
	console.log('click freccia SU ^')

	change_dati(-1);
})


$('#freccia_giu').bind('click',function(){
	change_dati(+1)
})

$('#punto_di_domanda').bind('click',function(){
	$('#vocabolario').show();
})

$('#vocabolario').bind('click',function(){
	$(this).hide();
})

var index_attuale = 0;
var index_totali = $('#dati ol').length;
verifica_frecce();
function verifica_frecce(){
	if (index_attuale == index_totali-1){
		$('#freccia_giu a').css('background-color','#FC0545')
	} else {
		$('#freccia_giu a').css('background-color','transparent')
	}
	if (index_attuale <= 0 ){
		$('#freccia_su a').css('background-color','#FC0545')	
	} else {
		$('#freccia_su a').css('background-color','transparent')	
	}
}

function change_dati(giu_o_su){

	var percorso_base = $('#player').first().attr('src');
	console.log(index_attuale);

	var parole_da_cambiare = $('#dati ol').get(index_attuale).innerHTML;

	if (giu_o_su == 1 ){
		index_attuale++;
		if (index_attuale >= index_totali-1){
			index_attuale = index_totali-1;
		}
	} else {
		index_attuale--;
		if (index_attuale < 1){
			index_attuale = 0;
		}
	}
	verifica_frecce();


	var parole_da_inserire = $('#dati ol').get(index_attuale).innerHTML;
	
	var nuovo_percorso = percorso_base.replace(parole_da_cambiare,parole_da_inserire)

	var pl = $('#player').get(0)
	$(pl).attr('src', nuovo_percorso);
	pl.load();
	pl.play();

	//var anim = $('#animazione').get(0);	
	
	var vecchiaImg = $('#animazione').css('background-image');
	console.log('vecchia')
	console.log(vecchiaImg)
	var nuovaImg = vecchiaImg.replace(parole_da_cambiare,parole_da_inserire)
	
	console.log(nuovaImg);

	$('#animazione').css('background-image',nuovaImg)

	console.log($('#animazione').css('background-image'));

}