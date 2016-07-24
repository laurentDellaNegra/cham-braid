$(document).foundation();

function opemCarousel(slideNumber) {

  $('#carousel-modal').foundation('open');
  $('#carousel .orbit-bullets button').get(slideNumber).click();

}
