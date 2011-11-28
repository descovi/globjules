console.log($('#freccia_su').get(0))

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


function change_dati(giu_o_su){

	var percorso_base = $('#player')[0].src;

	var parole_da_cambiare = $('#dati ol').get(index_attuale).innerHTML;

	if (giu_o_su == +1 ){
		index_attuale++;
	} else {
		index_attuale--;
	}

	var parole_da_inserire = $('#dati ol')[index_attuale].innerHTML;
	
	var nuovo_percorso = percorso_base.replace(parole_da_cambiare,parole_da_inserire)


	$('#player')[0].src = nuovo_percorso;
	$('#player')[0].load()
	$('#player')[0].play();
	
	console.log($('#animazione').css('background-image'));
	
	var vecchiaImg = $('#animazione').css('background-image');
	var nuovaImg = vecchiaImg.replace(parole_da_cambiare,parole_da_inserire)
	
	console.log(nuovaImg);

	$('#animazione').css('background-image',nuovaImg)

	console.log($('#animazione').css('background-image'));

}