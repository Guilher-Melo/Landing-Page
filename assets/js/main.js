const menu = document.querySelector('.menu');
const menuMobile = document.getElementById('menu');
let largura = window.innerWidth;
let pagina = document.querySelector('.size');

    function mudouTamanho () {
      if (pagina.clientWidth >= 668) {
        menu.style.display = 'block';
      } 
    }
    
    
    function showMenu () {
        if (menuMobile.innerHTML === 'menu') {
        menu.style.display = 'block';
        menuMobile.innerHTML = 'close';
        } else {
        menu.style.display = 'none';
        menuMobile.innerHTML = 'menu';
      }      
    }
    

   function hideMenu() {
    if (window.matchMedia("(max-width:705px)").matches) {
      menu.style.display = 'none';
      menuMobile.innerHTML = 'menu';
    }
   }
