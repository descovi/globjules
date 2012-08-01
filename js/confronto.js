a = parseURLParams(location.href)
path_confronto = new Object();
path_confronto.long = './materiale/menu-iniziale/sul_palco/long-'
path_confronto.short =  './materiale/menu-iniziale/sul_palco/short-'
path_confronto.lettera = a.lettera[0]

var lettera1_audio;
var lettera2_audio;
can_play = true
//path per le animazioni e i percorsi relativi
counter = 1
active_path=""
active=""


$(document).ready(function(){
	lettera_scelta = path_confronto.lettera

	var path1 = path_confronto.short+lettera_scelta+'/1.png'
	var path2 = path_confronto.long+lettera_scelta+'/1.png'

	var path_audio = './materiale/audio/vocali/'+path_confronto.lettera+'_'
	

	$('#lettera1 img').attr('src',path1)
	$('#lettera2 img').attr('src',path2)
	$('#lettera1 div').html(path_confronto.lettera)
	$('#lettera2 div').html(lettera_scelta)
	//impost l'audio
	$('#lettera1 audio').attr('src',path_audio+'S.mp3')
	$('#lettera2 audio').attr('src',path_audio+'L.mp3')
	//caricamento effettuato per andare su ipad.
	lettera1_audio = $('#lettera1 audio').get(0)
	lettera2_audio = $('#lettera2 audio').get(0)
	lettera1_audio.load()
	lettera2_audio.load()

		console.log(lettera1_audio)


	$('#lettera1 img').click(function(){
		play_audio_1(this);
		play_anim(this);
	})

	$('#lettera2 img').click(function(){
		play_audio_2(this);
		play_anim(this);	
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

function play_audio_1(_this){
	lettera1_audio.play();
}
function play_audio_2(_this){
	lettera2_audio.play();
}


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


	function preload(){
		 var preload_image_object_short = new Image();
		 var preload_image_object_long = new Image();
      // set image url
      var image_url_short = new Array();
 			var image_url_long = new Array();


       var i = 1;

       for(i=1; i<=25; i++) {
       	image_url_short[i]= path_confronto.short+path_confronto.lettera+'/'+i+'.png'
       	image_url_long[i]= path_confronto.long+path_confronto.lettera+'/'+i+'.png'
       }

       for(i=1; i<25; i++) {
         preload_image_object_short.src = image_url_short[i];
         preload_image_object_long.src = image_url_long[i];
    	}
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