
//Кнопки 
 let cancelBtn = document.querySelector('.call__cancel')

 let callBtn = document.querySelector( '.header__call');
 let menuFeedbackBtn = document.querySelector('.footer-menu__call ')
 
//Меню обратной связи
 let callClosed = document.querySelector('.call__container') 
 let call = document.querySelector('.call__container-active') 
 
//Блюр
 let noBlurFeedback = document.querySelector( '.call-blur');
 let blurFeedback = document.querySelector( '.call-blur-active');
 
//Это чтобы экран вниз не листался
//  let notFixed = document.querySelector( '.page-container');
//  let Fixed = document.querySelector( '.page-container-fixed');
 
  
//Кнопка чтобы все отключить
 cancelBtn.addEventListener( 'click', function () { 
  
 callClosed.classList.add('call__container');
 call.classList.remove('call__container-active');
 
 noBlurFeedback.classList.add('call-blur');
 blurFeedback.classList.remove('call-blur-active');
  
//  notFixed.classList.add('page-container');
//  Fixed.classList.remove('page-container-fixed');
})
  
//Нажимаю кнопку в хедере
 callBtn.addEventListener( 'click', function () { 
  
 callClosed.classList.remove('call__container');
 call.classList.add('call__container-active');
 
 noBlurFeedback.classList.remove('call-blur');
 blurFeedback.classList.add('call-blur-active');
 
//  notFixed.classList.remove('page-container');
//  Fixed.classList.add('page-container-fixed');
 })
 
//Нажимаю кнопку в меню
 menuFeedbackBtn.addEventListener( 'click', function () { 
  
 callClosed.classList.remove('call__container');
 call.classList.add('call__container-active');
  
 
 noBlurFeedback.classList.remove('call-blur');
 blurFeedback.classList.add('call-blur-active');
 
//  notFixed.classList.remove('page-container');
//  Fixed.classList.add('page-container-fixed');
}) 

 
 blurFeedback.addEventListener( 'click', function () { 
 
 callClosed.classList.add('call__container');
 call.classList.remove('call__container-active');
 
 noBlurFeedback.classList.add('call-blur');
 blurFeedback.classList.remove('call-blur-active');
 
 
//Если отключаю блюр, то fix экрана тоже отключается
//  notFixed.classList.add('page-container');
//  Fixed.classList.remove('page-container-fixed');
 })