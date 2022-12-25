
function show_menu() {
  $('#show_menuitems').addClass('active');
}

function hide_menu() {
  $('#show_menuitems').removeClass('active');
}
// --------------------------------------

$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true
  });
});

// --------------------------------------
var nameError =document.getElementById('name-error');
var emailError =document.getElementById('email-error');
var subjectError =document.getElementById('subject-error');
var messageError =document.getElementById('message-error');
var submitError =document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('name').value;
  if(name.length==0){
    nameError.innerHTML="name is required";
    return false;
  }else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Enter full name";
    return false;
  }else{
  nameError.innerHTML="";
  return true;
}}
function validateEmail(){
  var email = document.getElementById('email').value;
  if(email.length==0){
    emailError.innerHTML="email is required";
    return false;
  }else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML="email invalid";
    return false;
  }else{
  emailError.innerHTML="";
  return true;
}}
function validateSubject(){
  var subject = document.getElementById('subject').value;
  if(subject.length==0){
    subjectError.innerHTML="subject is required";
    return false;
  }else{
  subjectError.innerHTML="";
  return true;
}}
function validateMessage(){
  var message = document.getElementById('message').value;
  var required =20;
  var left= required - message.length;
  if(left>0){
    messageError.innerHTML=left+'more character required';
    return false;
  }
  messageError.innerHTML="";
  return true;
}

  