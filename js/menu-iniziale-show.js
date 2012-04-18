$(document).ready(function(){
    $('#prima-fila li').bind('click',show_start_1)
    $('#seconda-fila li').bind('click',show_start_2)

    var counter = 0
    var fila_choose = 1;
    function show_start_1(e){
      playFila(this)
      fila_choose = '#prima-fila li';
    }
    function playFila(fila){

      var suono_vocale = $(fila).find('audio').get(counter)
      suono_vocale.addEventListener('ended', ended);
      suono_vocale.play();
    }
    function ended(){
      counter++
      if (counter < 5){

      playFila(fila_choose);
    } else {
      console.log('sequenza finita')
    }
      console.log('suono finito!')
    }

    function show_start_2(){
      var suono_vocale = $(this).find('audio').get(0)
      suono_vocale.play();   
    }
})