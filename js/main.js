//Loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})



  //Scroll
  var lastScrollTop = 0;
  navbar = document.getElementById("navbar");
  navbar2 = document.getElementById("navbar2");
  window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
      navbar.style.top="-10vh";
      navbar2.style.top="-10vh";
    }
    else{
      navbar.style.top = "0";
      navbar2.style.top = "0";
    }
    lastScrollTop = scrollTop;
  })



  
