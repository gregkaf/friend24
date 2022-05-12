$(document).ready(function () {
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: true,
    speed: 300,
    centerPadding: '20px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
  });
});

const fbPixelsEvent = () => fbq('trackCustom', 'Add to Wishlist');

const whatToDownloadAppBtn = document.getElementById(
  'what-to-download-app-btn'
);
whatToDownloadAppBtn.onclick = fbPixelsEvent;

const navDownloadAppBtn = document.getElementById('nav-downloa-app-btn');
navDownloadAppBtn.onclick = fbPixelsEvent;

$('#nav-contact-us').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('.in-touch').offset().top,
    },
    2000
  );
});

$('#nav-feature').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('.features').offset().top,
    },
    2000
  );
});

$('#nav-about').click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('.how-it').offset().top,
    },
    2000
  );
});
