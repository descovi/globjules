$('#freccia_su').bind('click',function(){
	console.log('click freccia SU ^')
})

$('#freccia_giu').bind('click',function(){
	console.log('click freccia GIU')
})

$('#punto_di_domanda').bind('click',function(){
	$('#vocabolario').show();
})

$('#vocabolario').bind('click',function(){
	$(this).hide();
})