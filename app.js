window.onload = () => {
  setTimeout(() => {
    $('#intro-heading').removeClass('hidden-heading');
    $('#intro-heading').addClass('animate__flipInX');
  }, 200);
  setTimeout(() => {
    $('.origami').addClass('animate__wobble');
  }, 1000);
}

/////////////////////////Carousel continuous///////////////////////////////////
$('.carousel').carousel({interval: 1, wrap: true, pause: false});

//////////////////////////Carousel icon hide///////////////////////////////////
$('.react-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').removeClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.node-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').removeClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.db-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').removeClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.docker-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').removeClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.github-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').removeClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.git-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').removeClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.stripe-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').removeClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.do-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').removeClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});

$('.bootstrap-icon').click(()=>{
  $('.close-button').removeClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').removeClass('hidden');
});

$('.close-button').click(()=>{
  $('.close-button').addClass('hidden');
  $('.react-description').addClass('hidden');
  $('.node-description').addClass('hidden');
  $('.db-description').addClass('hidden');
  $('.docker-description').addClass('hidden');
  $('.github-description').addClass('hidden');
  $('.git-description').addClass('hidden');
  $('.stripe-description').addClass('hidden');
  $('.do-description').addClass('hidden');
  $('.bootstrap-description').addClass('hidden');
});
///////////////////////////////////////////////////////////////////////////////