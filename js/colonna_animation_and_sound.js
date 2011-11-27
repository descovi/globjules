
counter = 1;
numeroFrame = 10;
timer_anim1=null;
timer_anim2=null;


prima = true;

start();

function start(){
$('#player')[0].load();	
$('#player')[0].play();
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
		
		var sourceAttuale = $('#player')[0].src;
		
		if (source == 2){
			sourceDaMettere = 2
			sourceDaTogliere = 1
			console.log('metti due')
		} else if (source == 1){
			console.log('metti uno')
			sourceDaMettere = 1
			sourceDaTogliere = 2
		}

		var posizione 	= sourceAttuale.lastIndexOf(sourceDaTogliere)
		var nuovaSource = sourceAttuale.replace(sourceDaTogliere,sourceDaMettere)
		
		$('#player')[0].src = nuovaSource;
		$('#player')[0].load()
		$('#player')[0].play();
}

function playAudio1(){
	if (counter < 5){
		setAndPlayNewSource(2)
	}
}
function playAudio2(){
	if (counter > 5){

		setAndPlayNewSource(1)
		/*
		var sourceAttuale = $('#player')[0].src;
		var posizione = sourceAttuale.lastIndexOf("1")
		var nuovaSource = sourceAttuale.replace('1','2')
		$('#player')[0].src = nuovaSource;
		$('#player')[0].play();
		*/
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

function go_forward(){
	
	timer_anim1 = setTimeout(function(){
		var p = 256*counter;
		$('#animazione').css('background-position-y','-'+p+'px')
		
		if (counter>=numeroFrame){
		
		} else {
			counter++
			go_forward();
		}

	}, 10);
	//console.log('avanti')
	//console.log(counter)
}


function go_backward(){
	timer_anim2 = setTimeout(function(){
		var p = 256*counter;
		$('#animazione').css('background-position-y','-'+p+'px')
		
		if (counter<=1){
		
		} else {
			counter--
			go_backward();
		}

	}, 10);
	//console.log('indietro')
	//console.log(counter)
	
}