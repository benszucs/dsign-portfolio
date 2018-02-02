$(document).ready(function() {
  $('.hover').mousemove(function(e) {
    var hoverText = $(this).attr('hinttext');
    $('#hintbox').text(hoverText).show();
  $('#hintbox').css('top',e.clientY+15).css('left',e.clientX+15);})
  .mouseout(function() {
    $('#hintbox').hide();
  });

  /*$('#grow-small').live("mouseover", function(){
          var $this=$(this);

          $this.attr('width','25%');
          $this.attr('height','25%');


       })*/

});
