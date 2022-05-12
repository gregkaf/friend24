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

// const buttonAppWantTo = document.getElementById('download_app_what_to');
// buttonAppWantTo.onclick = fbPixelsEvent;

// const buttonAppNavigation = document.getElementById('download_app_navigation');
// buttonAppNavigation.onclick = fbPixelsEvent;

// $('#link_feature').click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $('#features').offset().top,
//     },
//     2000
//   );
// });

// $('#link_about').click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $('.how-it').offset().top,
//     },
//     2000
//   );
// });

// $('#navigation__contct-us').click(function () {
//   $([document.documentElement, document.body]).animate(
//     {
//       scrollTop: $('.in-touch').offset().top,
//     },
//     2000
//   );
// });
