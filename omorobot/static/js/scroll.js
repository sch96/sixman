$(window).scroll((e) => {
  console.log($(window).scrollTop())

  if($(window).scrollTop() < 200) {
    $(".explain_a").fadeOut()
  } else if (400 < $(window).scrollTop() && $(window).scrollTop() < 1000){
    $(".explain_a").fadeIn()

  } else if (1100 < $(window).scrollTop()) {
      $(".explain_a").fadeOut()
  
  } else if ($(window).scrollTop() < 10) {
    $(".explain_a").hide()

  }  else if ($(window).scrollTop() < 100) {
    $(".explain_b").hide()

  } 
  else if (1100 < $(window).scrollTop() ){
    $(".explain_b").fadeIn()
    
  } else if (2100 < $(window).scrollTop()) {
      $(".explain_b").fadeOut()
  
  } 
});
