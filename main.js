SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {  });

SC.stream('/tracks/558313371',function(sound){ });
$('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

 $('#stop1').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });

SC.stream('/tracks/459223110',function(sound){ });
                  $('#start2').click(function(e) {
                             e.preventDefault();
                             sound.start();
                           });

                   $('#stop2').click(function(e) {
                                      e.preventDefault();
                                      sound.stop();
                                    });
SC.stream('/tracks/287344112',function(sound){ });
                  $('#start3').click(function(e) {
                             e.preventDefault();
                             sound.start();
                           });

                   $('#stop3').click(function(e) {
                                      e.preventDefault();
                                      sound.stop();
                                    });
    SC.stream('/tracks/571882998',function(sound){ });
                      $('#start4').click(function(e) {
                                 e.preventDefault();
                                 sound.start();
                               });

                       $('#stop4').click(function(e) {
                                          e.preventDefault();
                                          sound.stop();
