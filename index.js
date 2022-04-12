// $.each($('*'), function() { if ($(this).width() > $('body').width()) { console.log($(this).get(0)); } }).length;



var figure = $(".skillButton").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
  $('video', this).get(0).play();
}

function hideVideo(e) {
  $('video', this).get(0).pause();
}









$('.skillButton').hover(function() {

  // skillID defines the id associated with the button
  var skillID = $(this).find('.skillScore').attr('id');
  // Get Text Data aka the score from Skill Score class with ID
  var proficencyScore = $("#" + skillID).text();
  // Takes the first 2 numbers if its a 10, otherwise takes the first number from the score
  if (proficencyScore.substring(0, 2) == "10") {
    var overlaySize = 0;
  } else if(proficencyScore.substring(0,1) == "1" && proficencyScore.substring(0, 2) != "10") {
    var overlaySize = 11;
  }
  else {
    var overlaySize = proficencyScore.substring(0, 1);
    overlaySize =  13 - ((overlaySize * 13) / 10);

  }
  // Adjusts the Top Property withing skillOverlay to the score
  $(this).find('.skillOverlay').css("visibility", "visible");
  $(this).find('.skillOverlay').css("border-style", "hidden");
  $(this).find('.skillOverlay').hide(0);
  $(this).find('.skillOverlay').css('top', overlaySize + "rem");
  $(this).find(".skillOverlay").fadeIn(500);



}, function() {
  $(this).find('.skillOverlay').show(0);
  $(this).find(".skillOverlay").fadeOut(300);


});
