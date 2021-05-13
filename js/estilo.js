$(document).scroll(function() {
   // debugger;
    $(".logo").toggleClass("imgRedu", $(document).scrollTop() >= 50);
  });