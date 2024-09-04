import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination])

let swiper = undefined; // Объявляем переменную swiper вне блока if

if (window.matchMedia('(max-width: 768px)').matches) {
  const swiper = new Swiper('.pmain-block__nav', {
  
  // modules: [Navigation, Pagination], вот так в руководстве свейпера делил. Вариант рабочий, но надо тогда удалять Swiper.use([Navigation, Pagination])

  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  
  
  keyboard: {
  enabled: true,
  onlyInViewport: true,
  pageUpDown: true,
  },
  
  mousewheel: {
  sensitivity: 1,
  eventsTarget: '.pmain-block__nav'
  },
  
  spaceBetween: 16,
  slidesPerView: 'auto',
  watchOverflow: true,

  breakpoints: {
    768: {
    enabled: false,
    },
    }
  });
}
// Тут GPT помог, не оч понимаю как строка ниже работает. "Если Swiper уже был создан (т.е., swiper не равен null), вызывается метод destroy".
// А как он понимает, что Swiper уже создан? const swiper = new Swiper же в локальной области видимости?
else if (swiper !== undefined) {   
  swiper.destroy(false, true);
}
   