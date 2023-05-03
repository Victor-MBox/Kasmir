/* Слик Слайдер */
$(document).ready(function () {
  $(".slider").slick({
    fade: true,
    dots: false,
    swipeToSlide: true,
    arrows: false
  });
});

/* Управление слайдером */
var $dots = $(".slider-dots");

$(".slider").on("init", function (event, slick) {
  var slideCount = slick.slideCount;
  for (var i = 0; i < slideCount; i++) {
    $dots.append('<button type="button" data-slide="' + i + '"></button>');
  }
  $dots.find("button").first().addClass("active");
});

$(".slider").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    $dots.find("button").removeClass("active");
    $dots.find('button[data-slide="' + nextSlide + '"]').addClass("active");
  }
);

$dots.on("click", "button", function () {
  var slideIndex = $(this).data("slide");
  $(".slider").slick("slickGoTo", slideIndex);
});

/* Счетчик слайдов */
$('.slider').on('afterChange', function(event, slick, currentSlide) {
    var current = (currentSlide + 1).toString().padStart(2, '0');
    var total = slick.slideCount.toString().padStart(2, '0');
    $('.slider-current').text(current);
    $('.slider-total').text(total);
  });

/* Перелистывание слайдера колесом мыши (тогда не срабатывает скрол в 3м и 6м слайде)*/
/*   $('.slider').on('wheel', function(event) {
    event.preventDefault();
    if (event.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }); */
