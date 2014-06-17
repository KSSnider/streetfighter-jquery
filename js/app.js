
$(document).ready(function() {
  playMusic();
 
    $('.opening').fadeIn().delay(1000).fadeOut();
    $('.instructions').delay(2000).fadeIn();
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();

  })

  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
     $('.instructions').fadeIn();
  })
  .mousedown(function() {
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );})
    .mouseup(function() {
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
    });
    $("body").keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-action').hide();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
      $('.ryu-throwing').hide();
      $('.hadouken').finish().hide();
    }  
  })
    $("body").keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-action').hide();
      $('.ryu-still').show();
      $('.ryu-cool').hide();

    }  
  })


  
 
});
  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playMusic () {
  $('#background')[0].volume = 0.5;
  $('#background')[0].load();
  $('#background')[0].play();
}

 