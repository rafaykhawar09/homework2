
// toggle navbar
$(document).ready(function(){
     $(".hamburger").click(function(){
          console.log(this)
          if($(this).hasClass("closed")){
               $(".nav-group").slideDown();
               $(".hamburger").removeClass("closed");
               $(".hamburger").addClass("open");
          }
          else if($(this).hasClass("open")){
               $(".nav-group").slideUp();
               $(".hamburger").removeClass("open");
               $(".hamburger").addClass("closed");
          }
     });
});

//after scroll a certain height
//change background-color of
//navbar
$(window).scroll(function(){
     if($(this).scrollTop() > 50){
          $(".nav").removeClass("nav-bkg-before-scroll");
          $(".nav").addClass("nav-bkg-after-scroll");
     }
     // else{
     //      $(".nav").removeClass("nav-bkg-after-scroll");
     //      $(".nav").addClass("nav-bkg-before-scroll");
     // }
});
