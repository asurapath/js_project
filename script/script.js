$(document).ready(function(){
    $('.carousel_inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll:1,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"> < </button>',
        nextArrow: '<button type="button" class="slick-next"> > </button>',
})
    document.querySelectorAll('button[data-modal=consultation]').forEach(el => el.addEventListener('click', () => {
        const modal = ['.overlay', '#order']
    }))
   $(window).scroll(function () {
       if ($(this).scrollTop() > 1000)
           $('.page-up').fadeIn()
   }else{

         $('.page-up').fadeOut()
        }
    })
});





