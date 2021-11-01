$(window).resize(function () {
  if ($(window).width() >= 1440)
    document.getElementById('jits-solution-coverimg').src =
      './images/herobigscreen.png';
  else if ($(window).width() >= 1200)
    document.getElementById('jits-solution-coverimg').src = './images/hero.png';
  else if ($(window).width() >= 576)
    document.getElementById('jits-solution-coverimg').src =
      './images/herotablet.png';
  else
    document.getElementById('jits-solution-coverimg').src =
      './images/heromobile.png';
});

$(document).ready(function () {
  if ($(window).width() >= 1440) {
    document.getElementById('jits-solution-coverimg').src =
      './images/herobigscreen.png';
  } else if ($(window).width() >= 1200)
    document.getElementById('jits-solution-coverimg').src = './images/hero.png';
  else if ($(window).width() >= 576)
    document.getElementById('jits-solution-coverimg').src =
      './images/herotablet.png';
  else
    document.getElementById('jits-solution-coverimg').src =
      './images/heromobile.png';
});
