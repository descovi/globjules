a = parseURLParams(location.href)

$(document).ready(function(){
	var lettera_scelta = a.lettera[0]
	var path_root_long = './materiale/menu-iniziale/sul_palco/long-'
	var path_root_short = './materiale/menu-iniziale/sul_palco/short-'

	var path1 = path_root_short+lettera_scelta+'.png'
	var path2 = path_root_long+lettera_scelta+'.png'

	var path_audio = './materiale/audio/vocali/A_'
	

	$('#lettera1 img').attr('src',path1)
	$('#lettera2 img').attr('src',path2)
	$('#lettera1 div').html(lettera_scelta)
	$('#lettera2 div').html(lettera_scelta)
	$('#lettera1 audio').attr('src',path_audio+'S.mp3')
	$('#lettera2 audio').attr('src',path_audio+'L.mp3')

	$('.lettera img').click(function(){
		var audio = $(this).find('audio')
		console.log(audio)
		audio[0].play()
	})

	
})