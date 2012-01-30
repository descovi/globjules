$(document).ready(function(){
	// CAMBIA PAROLA A LIVELLO DI DATI
	$('#freccia_su').bind('click',function(){change_dati(-1);})
	$('#freccia_giu').bind('click',function(){change_dati(+1)})
	// MOSTRA VOCABOLARIO	//
	$('#punto_di_domanda').bind('click',function(){$('#vocabolario').show();})
	// NASCONDI VOCABOLARIO //
	$('#vocabolario').bind('click',function(){$(this).hide();})

dati_da_guardare = '#dati-'+currentLetter;
	index_totali = $(dati_da_guardare+' ol').length;

	//	MOSTRA NASCONDI FRECCIA
	index_attuale = 0;
	verifica_frecce();
})

function verifica_frecce(){
	if (index_attuale == index_totali-1){
		$('#freccia_giu a').css('background-color',colore_per_nascondere_frecce)
	} else {
		$('#freccia_giu a').css('background-color','transparent')
	}
	if (index_attuale <= 0 ){
		$('#freccia_su a').css('background-color',colore_per_nascondere_frecce)	
	} else {
		$('#freccia_su a').css('background-color','transparent')	
	}
}

// CHANGE DATI
function change_dati(giu_o_su){
	var percorso_base = $('#player').first().attr('src');
	var parole_da_cambiare = $(dati_da_guardare+' ol').get(index_attuale).innerHTML;

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

	var parole_da_inserire = $(dati_da_guardare+' ol').get(index_attuale).innerHTML;


	//AUDIO PLAY 

	var nuovo_percorso = percorso_base.replace(parole_da_cambiare,parole_da_inserire)

	var pl = $('#player').get(0)
	$(pl).attr('src', nuovo_percorso);
	pl.load();
	pl.play();
		console.log('->'+parole_da_inserire)

	var vecchiaImg = $('#animazione').css('background-image');
	var nuovaImg = vecchiaImg.replace(parole_da_cambiare,parole_da_inserire)

	$('#animazione').css('background-image',nuovaImg)

	console.log($('#animazione').css('background-image'));

}