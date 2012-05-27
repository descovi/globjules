a = parseURLParams(location.href)
path_confronto = new Object();
path_confronto.long = './materiale/menu-iniziale/sul_palco/long-'
path_confronto.short =  './materiale/menu-iniziale/sul_palco/short-'
path_confronto.lettera = a.lettera[0]
$(document).ready(function(){
	lettera_scelta = path_confronto.lettera

	var path1 = path_confronto.short+lettera_scelta+'/1.png'
	var path2 = path_confronto.long+lettera_scelta+'/1.png'

	var path_audio = './materiale/audio/vocali/'+path_confronto.lettera+'_'
	

	$('#lettera1 img').attr('src',path1)
	$('#lettera2 img').attr('src',path2)
	$('#lettera1 div').html(path_confronto.lettera)
	$('#lettera2 div').html(lettera_scelta)
	$('#lettera1 audio').attr('src',path_audio+'S.mp3')
	$('#lettera2 audio').attr('src',path_audio+'L.mp3')

	$('.lettera img').click(function(){
		play_audio(this)
		play_anim(this)
	})

	$('.lettera div').click(function(){
		if (lettera_scelta == 'i' || lettera_scelta == 'u'){
				
			if (lettera_scelta == 'u'){
				lettera_scelta = 'u-e'
			} 
			
			if (lettera_scelta == 'i'){
				lettera_scelta = 'i-e'
			}	
			
			location.href="colonna.html?lettera="+lettera_scelta;
			
		} else {
			
			location.href="scelta-combinazione-vocale.html?lettera="+lettera_scelta;
		}
	
	})
})

function play_audio(_this){
	var audio = $(_this).parent().find('audio')
	audio[0].load()
	audio[0].play()
}

counter = 1
active_path=""
active=""

function play_anim(_this){
	stop_animate();
	active = this
	counter = 1;
	if ($(_this).attr('id') == 'short'){
		active_path = path_confronto.short
	} else {
		active_path = path_confronto.long
	}

	interval_animation = window.setInterval(animate, 30,{el:_this});  
}

function animate(_par){
	counter++
	if (counter > 24){
		counter = 1
		$(_par.el).attr('src',path_img_nuova)
		stop_animate()
	}

	path_img_nuova = active_path+path_confronto.lettera+'/'+counter+'.png'
	$(_par.el).attr('src',path_img_nuova)

}
function stop_animate(){
	if (active_path !=""){
		$(active).attr('src',active_path+path_confronto.lettera+'/1.png')
		counter = 1
		clearInterval(interval_animation)
	}
}