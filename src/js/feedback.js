 //Кнопки 
let cancelBtn = document.querySelector('.feedback__cancel')

let feedbackBtn = document.querySelector( '.header__chat');
let menuFeedbackBtn = document.querySelector('.footer-menu__chat ')

//Меню обратной связи
let feedbackClosed = document.querySelector('.feedback__container') 
let feedback = document.querySelector('.feedback__container-active') 

//Блюр
let noBlurFeedback = document.querySelector( '.feedback-blur');
let blurFeedback = document.querySelector( '.feedback-blur-active');

 //Это чтобы экран вниз не листался
// let notFixed = document.querySelector( '.page-container');
// let Fixed = document.querySelector( '.page-container-fixed');

 
 //Кнопка чтобы все отключить
cancelBtn.addEventListener( 'click', function () { 
 
feedbackClosed.classList.add('feedback__container');
feedback.classList.remove('feedback__container-active');

noBlurFeedback.classList.add('feedback-blur');
blurFeedback.classList.remove('feedback-blur-active');
 
// notFixed.classList.add('page-container');
// Fixed.classList.remove('page-container-fixed');
})
 
  //Нажимаю кнопку в хедере
feedbackBtn.addEventListener( 'click', function () { 
 
feedbackClosed.classList.remove('feedback__container');
feedback.classList.add('feedback__container-active');

noBlurFeedback.classList.remove('feedback-blur');
blurFeedback.classList.add('feedback-blur-active');

// notFixed.classList.remove('page-container');
// Fixed.classList.add('page-container-fixed');

})

//Нажимаю кнопку в меню
menuFeedbackBtn.addEventListener( 'click', function () { 
 
feedbackClosed.classList.remove('feedback__container');
feedback.classList.add('feedback__container-active');
 
noBlurFeedback.classList.remove('feedback-blur');
blurFeedback.classList.add('feedback-blur-active');

// notFixed.classList.remove('page-container');
// Fixed.classList.add('page-container-fixed');
}) 


blurFeedback.addEventListener( 'click', function () { 

feedbackClosed.classList.add('feedback__container');
feedback.classList.remove('feedback__container-active');

noBlurFeedback.classList.add('feedback-blur');
blurFeedback.classList.remove('feedback-blur-active');

//Если отключаю блюр, то fix экрана тоже отключается
// notFixed.classList.add('page-container');
// Fixed.classList.remove('page-container-fixed');
})