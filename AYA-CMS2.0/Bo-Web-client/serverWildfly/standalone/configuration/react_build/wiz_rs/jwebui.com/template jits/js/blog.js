$(window).resize(function () {
  // console.log($( window ).width())
  $('.jits-blog-content').css({
    display: 'inline-block',
    height: 'auto',
  });
});

var $el, $main, $sub, $up, totalHeight;

$('.jits-read-more-button').click(function () {
  // console.log(123456)
  totalHeight = 0;
  $el = $(this);
  $up = $('.jits-blog-content');
  $main = $up.find('.jits-blog-content-maincontent');
  $sub = $up.find('.jits-blog-content-subcontent');
  if ($(window).width() >= 768)
    $sub.each(function (index) {
      if (index % 3 == 0) totalHeight += $(this).outerHeight();
    });
  else
    $sub.each(function (index) {
      totalHeight += $(this).outerHeight();
    });

  totalHeight += $main.outerHeight() + 20;

  $up
    .css({
      height: $up.outerHeight(),
      'max-height': 9999,
    })
    .animate({
      height: totalHeight,
    });

  // fade out read-more
  $el.fadeOut();
  $('.jits-blog-content-blur').fadeOut();

  $('.jits-blog').css({
    'padding-bottom': '50px',
  });

  // prevent jump-down
  return false;
});
