

$(document).ready(function() {
/*
  $(function(){

    $('.scroll').click(function(){

      $('html, body').animate(
        {
          scrollTop:$('.content-container').offset().top
        },
        'slow'
      )
    })
  })
*/
/* jump beck up top button */
  $(function() {
    $('.content-button').click(function() {
      $('html, body').animate({scrollTop:$('header').offset().top}, 'slow')
    })
  });

/* Student projects scroll */
  $(function() {
    $('#rsa-kitchen-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });
  $(function() {
    $('#dnad-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });
  $(function() {
    $('#comcam-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });
  $(function() {
    $('#vs-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });

  /* freelance scroll*/
  $(function() {
    $('#makcity-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });
  $(function() {
    $('#mellow-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });
  $(function() {
    $('#bg-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });

  /* Archives scroll */
  $(function() {
    $('#logos-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });
  $(function() {
    $('#photos-card').click(function() {
      $('html, body').animate({scrollTop:$('.marker').offset().top}, 1500)
    })
  });

});
