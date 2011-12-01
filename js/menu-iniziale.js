$('.container').bind('click',function(e){
	
	var suono_vocale = $(this).find('audio').get(0)
	suono_vocale.play();


	if ($(this).find('.lettera_testuale').get(0).innerHTML == 'a'){

	play_animazione_pronuncia(this);
}
	
})
var intervalloAnimazione;
function play_animazione_pronuncia(cosa){
	var counter = 1;
	clearInterval(intervalloAnimazione);
	intervalloAnimazione= setInterval(function(){
		counter++;
		
		$(cosa).find('img').attr('src','materiale/menu-iniziale/a/'+counter+'.png');
		if (counter>17){
			counter = 17;
		}
	},60)
}


$('#lettera_a').bind('click', function(){
	location.href="colonna.html"
})


	
setInterval(muoviAncora,1000)
function muoviAncora(e){
	$('.icona_animata').each(function(e){
		var randomnumber=Math.floor(Math.random()*50)+"px"
		$(e).anim({translate3d: '0,'+randomnumber+',0'}, 1, 'linear');
	})
}


console.log($('.container'))