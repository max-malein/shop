(function(a,b){var c=function(a,b,c){var d;return function e(){function g(){if(!c)a.apply(e,f);d=null}var e=this,f=arguments;if(d)clearTimeout(d);else if(c)a.apply(e,f);d=setTimeout(g,b||20)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}})(jQuery,"smartresize")

var $masonry = $('.masonry');
var navigationTopOffset;
var navigationHeight;

jQuery(window).load(function(){
  
  $masonry.show();
  
  
  navigationTopOffset = $('#nav').offset().top;
  navigationHeight = $('nav.main').height();
  
  
  $('.flexslider').flexslider({
    directionNav: true,
    controlNav: true,
    keyboardNav: true,
    slideshowSpeed: 5000,
    animation: "fade",
    prevText: 'Previous',
    nextText: 'Next',
    controlsContainer: '.custom-flexslider-controls'
  });
  $('.flexslider li img').click(function(){
    var url = jQuery(this).attr('data-url');
    if (url.length > 0) {window.location.href = url;}
  });
  
  
  
  var IE6 = false /*@cc_on || @_jscript_version < 5.7 @*/;
  if(IE6){
    if($("#placeholder img").width() > 360){
      $("#placeholder img").css('width', '360px');
    } else {
      $("#placeholder img").css('width', $("#placeholder img").width()+'px'); // restrict to initial width of image
    }
  } else {
    $("#placeholder img").css('maxWidth', $("#placeholder img").width()+'px'); // restrict to initial width of image
  }

  var pw = $("#placeholder img").width() + 8;
  $("#placeholder img").parents('div.featured').css('maxWidth', pw+'px'); // force IE to play nice
  
});

jQuery(document).ready(function($){
  
  $("a.zoom").fancybox({
    padding:0,
    'titleShow': false,
    overlayColor: '#ffffff',
    overlayOpacity: 0.5
  });
  
  
  $masonry.imagesLoaded(function(){
    $masonry.masonry({
      itemSelector : '.masonry-item'
    });
  });
  $(window).smartresize(function(){
    $masonry.masonry('reload');
  });
  

  $("nav.mobile select").change(function(){ window.location = jQuery(this).val(); });
  $('#product .thumbs a').click(function(){
    
    $('#zoom-image').attr('href', $(this).attr('href'));
    return false;
  });
  
  
  $(".flexslider li img").each(function(){
    var url = $(this).attr('data-url');
    if(url != undefined){
      if (url.length > 0) { $(this).css("cursor","pointer");}
    }
  });
  
  
  
  navigationTopOffset = $('#nav').offset().top;
  $(window).scroll(function(){
    navigationHeight = $('nav.main').height();
    navigationHeight += 20;
    if($(window).scrollTop() > navigationTopOffset){
      $('body').addClass('fixed-navigation');
      $('body').css('padding-top', navigationHeight + 'px');
    } else {
      $('body').removeClass('fixed-navigation');
      $('body').css('padding-top', '0');
    }
  });
  
  
  $('input[type="submit"], input.btn, button').click(function(){ // remove ugly outline on input button click
    $(this).blur();
  })
  
  $("li.dropdown").hover(function(){
    $(this).children('.dropdown').show();
    $(this).children('.dropdown').stop();
    $(this).children('.dropdown').animate({
      opacity: 1.0
    }, 200);
  }, function(){
    $(this).children('.dropdown').stop();
    $(this).children('.dropdown').animate({
      opacity: 0.0
    }, 400, function(){
      $(this).hide();
    });
  });
}); // end document ready