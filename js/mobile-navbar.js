class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  var lastScrollTop2 = 0;
  navlist = document.getElementById("nav-list");

  window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var x = window.matchMedia("(max-width: 999px)");
    if(scrollTop > lastScrollTop2){
      if(x.matches){
        navlist.style.top ="6.5vh";
        navlist.style.right ="-500px";
      }else{
        navlist.style.top ="0";
        navlist.style.right ="43%";
      }
    }
    else{
      if(x.matches){
        navlist.style.right ="0";
        navlist.style.top ="6.5vh";
      }else{
        navlist.style.top ="0";
        navlist.style.right ="43%";
      }
    }
    lastScrollTop2 = scrollTop;
  })

