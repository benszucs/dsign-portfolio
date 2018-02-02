$(document).ready(function() {
  /*
  var counter = 0;
  var counter2 = 0
  var counter3 = 0

  $('#projects').on('click', function() {
    if ( counter === 0 && counter2 === 0 && counter3 === 0 ) {
      $('#first-card-content').slideDown(500);
      counter += 1;
    } else if (counter === 1 && counter2 === 0 && counter3 === 0 ) {
      $('#first-card-content').slideUp(500);
      counter -= 1;
    }
  });

  $('#freelance').on('click', function() {
    if ( counter === 0 && counter2 === 0 && counter3 === 0 ) {
      $('#second-card-content').slideDown(500);
      counter2 += 1;
    } else if (counter2 === 1 && counter === 0 && counter3 === 0) {
      $('#second-card-content').slideUp(500);
      counter2 -= 1;
    }
  });

  $('#archives').on('click', function() {
    if ( counter === 0 && counter2 === 0 && counter3 === 0 ) {
      $('#third-card-content').slideDown(500);
      counter3 += 1;
    } else if (counter3 === 1 && counter2 === 0 && counter === 0) {
      $('#third-card-content').slideUp(500);
      counter3 -= 1;
    }
  });
  */

  /*first 3 card functionality*/

  $('#projects').on('click', function() {
    $('#first-card-content').fadeIn(500);
    $('#second-card-content').fadeOut(500);
    $('#third-card-content').fadeOut(500);
  });

  $('#freelance').on('click', function() {
    $('#first-card-content').fadeOut(500);
    $('#second-card-content').fadeIn(500);
    $('#third-card-content').fadeOut(500);
  });

  $('#archives').on('click', function() {
    $('#first-card-content').fadeOut(500);
    $('#second-card-content').fadeOut(500);
    $('#third-card-content').fadeIn(500);
  });


/* 4 card functionality*/

  $('#rsa-kitchen-card').on('click', function() {
    $('#rsa-kitchen-content').fadeIn(500);
    $('#dnad-content, #comcam-content2, #vs-content, #makcity-content, #mellow-content, #bg-content, #photos-content,  #logos-content').fadeOut(500);
  });

  $('#dnad-card').on('click', function() {
    $('#dnad-content').fadeIn(500);
    $('#rsa-kitchen-content, #comcam-content2, #vs-content, #makcity-content, #mellow-content, #bg-content, #photos-content,  #logos-content').fadeOut(500);
  });

  $('#comcam-card').on('click', function() {
    $('#comcam-content2').fadeIn(500);
    $('#rsa-kitchen-content, #dnad-content, #vs-content, #makcity-content, #mellow-content, #bg-content, #photos-content,  #logos-content').fadeOut(500);
  });

  $('#vs-card').on('click', function() {
    $('#vs-content').fadeIn(500);
    $('#rsa-kitchen-content, #comcam-content2, #dnad-content, #makcity-content, #mellow-content, #bg-content, #photos-content,  #logos-content').fadeOut(500);
  });

/* Freelance functionality */
  $('#makcity-card').on('click', function() {
    $('#makcity-content').fadeIn(500);
    $('#rsa-kitchen-content, #comcam-content2, #dnad-content, #vs-content, #mellow-content, #bg-content, #photos-content,  #logos-content').fadeOut(500);
  });

  $('#mellow-card').on('click', function() {
    $('#mellow-content').fadeIn(500);
    $('#rsa-kitchen-content, #comcam-content2, #dnad-content, #vs-content, #makcity-content, #bg-content, #photos-content,  #logos-content').fadeOut(500);
  });

  $('#bg-card').on('click', function() {
    $('#bg-content').fadeIn(500);
    $('#rsa-kitchen-content, #comcam-content2, #dnad-content, #vs-content, #makcity-content, #mellow-content, #photos-content,  #logos-content').fadeOut(500);
  });

  /* Archives functionality */
  $('#logos-card').on('click', function() {
    $('#logos-content').fadeIn(500);
    $('#rsa-kitchen-content, #comcam-content2, #dnad-content, #vs-content, #makcity-content, #bg-content, #mellow-content, #photos-content').fadeOut(500);
  });

  $('#photos-card').on('click', function() {
    $('#photos-content').fadeIn(500);
    $('#rsa-kitchen-content, #comcam-content2, #dnad-content, #vs-content, #makcity-content, #bg-content, #mellow-content, #logos-content').fadeOut(500);
  });



  });
