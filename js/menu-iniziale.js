/*

LISTENER
========

*/
$(document).ready(function(){
	$('.container').bind('click',containerClicked)
	$('.lettera_testuale').bind('click', openColonna)
})

/******************** CLICK SU PUPAZZO ********************/
// FA PARTIRE ANIMAZIONE E SUONO //
var intervalAnim;

function containerClicked(e){
	var suono_vocale = $(this).find('audio').get(0)
	suono_vocale.play();
	var letteraCliccata = $(this).find('.lettera_testuale').get(0).innerHTML;
	play_animazione_pronuncia(this, letteraCliccata);
}

function play_animazione_pronuncia(_cosa, _letteraCliccata){
	var counter = 1;
	clearInterval(intervalAnim);
	intervalAnim = setInterval(
	function(){
		counter++;
		var path = 'materiale/menu-iniziale/'+_letteraCliccata+'/'+counter+'.png';
		$(_cosa).find('img').attr('src',path);
		if (counter>17){
			counter = 17;
		}
	},60)
}

/******************** CLICK SU LETTERA ********************/
// CAMBIA PAGINA //

function openColonna(e){
	var letteraDaPassare = e.target.innerHTML
	location.href="colonna.html?lettera="+letteraDaPassare;
	console.log(letteraDaPassare)
}
	
setInterval(muoviAncora,1000)
function muoviAncora(e){
	$('.icona_animata').each(function(e){
		var randomnumber=Math.floor(Math.random()*50)+"px"
		$(e).anim({translate3d: '0,'+randomnumber+',0'}, 1, 'linear');
	})
}