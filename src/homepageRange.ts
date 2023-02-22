import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
window.Webflow ||= [];
window.Webflow.push(() => {
  //slide animation and movement
  const splide = new Splide('.splide', {
    perPage: 5,
    breakpoints: {
      500: {
        perPage: 3,
        gap: '.7rem',
        height: '6rem',
      },
    },
    type: 'loop',
    drag: 'free',
    // focus: 'center',
    pagination: false,
    perMove: 1,
    autoScroll: {
      speed: 0.5,
    },
  }).mount({ AutoScroll });
});
