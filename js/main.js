$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class=" slick-arrow slick-prev"><img src="img/arrow-left.svg" alt="prev" ></button>',
        nextArrow:'<button type="button" class="slick-arrow slick-next " ><img src="img/arrow-right.svg" alt="next" ></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows:false
            }
          }

        ]
      });
})
