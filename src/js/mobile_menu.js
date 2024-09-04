if (window.matchMedia('(max-width: 1425px)').matches) {


 let burger = document.querySelector( '.header__burger');
 let menu = document.querySelector( '.block__container');
 let closeMenu = document.querySelector( '.header-menu__cancel');

 let noBlur = document.querySelector( '.page-blur');
 let blur = document.querySelector( '.page-blur-active');

 //Это чтобы экран вниз не листался
//  let notFixed = document.querySelector( '.page-container');
//  let Fixed = document.querySelector( '.page-container-fixed ');


closeMenu.addEventListener( 'click', function () { 

menu.classList.remove('block__container-active');
menu.classList.add('block__container');

blur.classList.add('page-blur');
noBlur.classList.remove('page-blur-active');

// notFixed.classList.add('page-container');
// Fixed.classList.remove('page-container-fixed');
})


burger.addEventListener( 'click', function () { 

menu.classList.remove('block__container');
menu.classList.add('block__container-active');

blur.classList.remove('page-blur');
noBlur.classList.add('page-blur-active');

// notFixed.classList.remove('page-container');
// Fixed.classList.add('page-container-fixed');
})


blur.addEventListener( 'click', function () { 

menu.classList.remove('block__container-active');
menu.classList.add('block__container');

blur.classList.add('page-blur');
noBlur.classList.remove('page-blur-active');

//Дублирую, чтобы Fix отключася при нажатии заблюр. области
// notFixed.classList.add('page-container');
// Fixed.classList.remove('page-container-fixed');
})


} 
// Сверху matchMedia
