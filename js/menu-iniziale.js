$('.container').bind('click',function(){
	var suono_vocale = $(this).find('audio')[0]
	console.log(suono_vocale)
	suono_vocale.play();
	//$(this).find('audio')[0].play();
})
$('#lettera_a').bind('click', function(){
	location.href="colonna.html"
})
