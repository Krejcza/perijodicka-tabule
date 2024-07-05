let swiper = new Swiper(".review-content", {
   slidesPerView: 4,
   spaceBetween: 25,
   loop: true,
   centerSlide:true,
   fade: true,
   grabCursor: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints:{
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    },
    1380: {
         slidesPerView: 4,
    },
},
});

