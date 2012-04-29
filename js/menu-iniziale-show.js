$(document).ready(setup)
 
//contatori
var counter_temp = 0;
var counter_tot = 0;

// la fila scelta da cui pigliare i suoni
var fila_choose
var fila_alternativa

//0. SETUP 
function setup(e){
  create_image()
  add_listener()
}

function add_listener(){
  $('#prima-fila li').bind('click',show_start_1)
  $('#seconda-fila li').bind('click',show_start_2)
}

function remove_listener(){
  $('#prima-fila li').unbind('click',show_start_1)
  $('#seconda-fila li').unbind('click',show_start_2) 
}

function create_image(){
  var  original_path = "./materiale/menu-iniziale/sul_palco/"
  $('.fila img').forEach(function(e){
    var percorso = $(e).attr('path')
    $(e).attr('src',original_path+percorso)
  })
}

//1.CLICK
function show_start_1(e){
  remove_listener()
  $(this).addClass('glob_selected')
  fila_choose       = '#prima-fila li'
  fila_alternativa  = '#seconda-fila li'
  playSoundFila(this)
  playAnimFila(this)
}
function show_start_2(e){
  remove_listener()
  $(this).addClass('glob_selected')
  fila_choose       = '#seconda-fila li'
  fila_alternativa  = '#prima-fila li'
  playSoundFila(this)
  playAnimFila(this)
}

//2.SOUND start with the sound!!!
function playSoundFila(fila){
  var suono_vocale = $(fila).parent().find('audio').get(counter_temp)
  suono_vocale.addEventListener('ended', ended)
  suono_vocale.play()
}
//3. loop 
function ended(){

  counter_temp++
  counter_tot++

  console.log('temp:  '+counter_temp)
  console.log('tot:   '+counter_tot)

  if (counter_tot < 5){
    playSoundFila(fila_choose)
    playAnimFila(fila_choose)
  } else if (counter_tot < 10) {
    if (counter_tot == 5){
      counter_temp = 0;
    }
    playSoundFila(fila_alternativa)
    playAnimFila(fila_alternativa)
  } else{
    counter_tot = 0;
    counter_temp = 0;
    console.log('suono finito!')
    add_listener()
  }
  
}

//2. ANIMAZIONE start with the anim
var globulo_corrente;
var globulo_corrente_img;
var anim_interval;
var anim_frame=1;
var root_anim_path = "./materiale/menu-iniziale/sul_palco/"
var anim_path;

function playAnimFila(fila){
  anim_interval = setInterval(frameChange,30);
  set_glob_active()
}

function set_glob_active(){
  console.log('----------------------------')
  console.log('     SET GLOB ACTIVE        ')
  console.log('----------------------------')
  console.log('fila_choose:  ' + fila_choose)
  console.log('counter_temp: ' + counter_temp)
  console.log('----------------------------')
  console.log('----------------------------')
 
  if (counter_tot < 5){
    fila = fila_choose
  } else {
    fila = fila_alternativa
  }

  globulo_corrente = $(fila).get(counter_temp)
  globulo_corrente_img = $(globulo_corrente).find('img')
  anim_path = $(globulo_corrente_img).attr('path')
  anim_path = anim_path.replace(".png","")
}

function frameChange(e){
  
  anim_frame++;
  if (anim_frame > 24){
    anim_frame = 1;
    clearInterval(anim_interval)
  }
  //console.log(anim_frame)
  var image_path = root_anim_path+anim_path+'/'+anim_frame+'.png'  
  $(globulo_corrente_img).attr('src',image_path)

}


