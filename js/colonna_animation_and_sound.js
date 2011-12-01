currentWord = "tantaint"

counter = 1
timer_anim1=null;
timer_anim2=null;
prima = true;

start();


   
function start(){

	$('#player').get(0).load();	
	$('#player').get(0).play();
	$("#animazione").bind("click", function(){
		if (prima){
			playAudio1()
			animazione1();
			prima = false
		} else {
			playAudio2()
			animazione2();
			prima = true
		}
	})

}

function setAndPlayNewSource(source){
		
		var sourceAttuale = $('#player').get(0).src;
		
		if (source == 2){
			
			sourceDaMettere 	= 2
			sourceDaTogliere	= 1
			if (debug_audio_change){
				console.log('metti due')
			}

		} else if (source == 1){

			
			sourceDaMettere 	= 1
			sourceDaTogliere 	= 2
			if (debug_audio_change){
				console.log ('metti uno')
			}

		}

		var posizione	= sourceAttuale.lastIndexOf(sourceDaTogliere)
		var nuovaSource = sourceAttuale.replace(sourceDaTogliere,sourceDaMettere)
		console.log($('#player'))
		var pl = $('#player').get(0)
		$(pl).attr('src', nuovaSource);
		$('#player').get(0).load()
		$('#player').get(0).play();
}

function playAudio1(){
	if (counter < 5){
		setAndPlayNewSource(2)
	}
}
function playAudio2(){
	if (counter > 5){
		setAndPlayNewSource(1)
	}
}

function animazione1(){
	clearTimeout(timer_anim1)
	clearTimeout(timer_anim2)
	go_forward();	
}

function animazione2(){
	clearTimeout(timer_anim1)
	clearTimeout(timer_anim2)
	go_backward();
}


altezzaImg = 256;

interval_frame = 10;

function go_forward(){
	
	timer_anim1 = setTimeout(function(){
		var p = altezzaImg*counter;
		$('#animazione').css('background-position-y','-'+p+'px')
		
		if (counter>=interval_frame){
		
		} else {
			counter++
			go_forward();
		}

	}, interval_frame);
	if (debug || debug_animation) {
		console.log('avanti')
		console.log(counter)
	}
}


function go_backward(){
	
	timer_anim2 = setTimeout(function(){
		var p = altezzaImg*counter;
		$('#animazione').css('background-position-y','-'+p+'px')
		
		if (counter<=1){
		
		} else {
			counter--
			go_backward();
		}

	}, interval_frame);

	if (debug || debug_animation){
		console.log('indietro')
		console.log(counter)
	}
	
}