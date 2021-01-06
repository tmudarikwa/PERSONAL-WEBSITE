/*****************************************************************************************
MOBILE DEVICES CODING
*****************************************************************************************/
var heightX = document.body.clientHeight;
//detecting if site is on mobile device
if( navigator.userAgent.match(/Android/i)|| navigator.userAgent.match(/webOS/i)|| navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPod/i)|| navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/Windows Phone/i)){
   $('blockquote p').css('font-size','2rem');
   $('#about h1').css('font-size','2rem');
   $('#about p').css('font-size','1.4rem');
   $('#contact h1').css('font-size','2rem');
   $('#contact p').css('font-size','1.4rem');
}
/*****************************************************************************************
 END OF MOBILE DEVICES CODING
*****************************************************************************************/

const quotes=[
  ['What is worth doing is worth doing well.','Nicolas Poussin'],
  ['I am still learning.', 'Michelangelo'],
  ['Time stays long enough for those who will use it.','Leonardo Da Vinci'],
  ['Simplicity is the ultimate sophistication.','Leonardo Da Vinci'],
  ['Creativity takes courage.','Henri Matisse'],
  ['I never lose. I either win or learn.','Nelson Mandela'],
  ['Every job is a self potrait for a person who did it.','UNKOWN']
];
function getRanInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let index= getRanInt(6);
window.addEventListener('load', function(){
  $(".navbar-nav").sticky();
  $('.blockquote p').text(quotes[index][0]);
  $('.blockquote-footer').text(quotes[index][1]);
  setTimeout(function(){
  $('#loader').hide();//fadeOut('slow');
  $('.container-fluid').fadeIn('slow');
  },3000);
});
/****************************
   NAVIGATION
****************************/
$('.nav-item').click(function(e){
  e.preventDefault();
  var txt = e.target.innerText.toLowerCase();
  if (txt.includes("résumé") == false){
    $('html,body').animate({
      scrollTop: $("#"+txt).offset().top}
    , 1300);
    if(txt != 'home') ScrollReveal().reveal("#"+txt,{delay:600});
  }else{
    window.open('/TAKUNDAEUGENEMUDARIKWA-RESUME', target='_blank');
  }
});
if(window.location.href.includes("#portfolio")){
  $(document).ready(function(){
    $('html,body').animate({
      scrollTop:$('#portfolio').offset().top
    },'slow');
  });
}
/****************************
   PORTFOLIOca
****************************/
$('#portfolio img').mouseenter(function(){
$(this).append($(this)[0].title);
}).mouseleave(function(){console.log('left');});
/****************************
   CONTACT FORM
****************************/
$('.alert').hide();
//contact form email submit
var contactusform = ($("#emailfromcustomer").html());
$("#emailfromcustomer button").click(function(e){
  e.preventDefault();

  var email = $("#customeremail").val();
  var format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var customertext = $("#customertext").val();

  //validation first
  if (email.length > 0 ){
    if(format.test(email) == true){
        if (customertext.length > 0){
            $('.alert').html("");
            var data = {};
            data.email = email;
            data.message = customertext;

            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType : 'application/json',
              url:'/sendemail',
              success: function(data)
              {

                emailStatus(data);
                $("#emailfromcustomer").html(contactusform);
                noty.clear();
              }
            });
        }else{
            $("#customertext").css("box-shadow", "0 0 5px red");
                    noty({
                    layout:'bottomCenter',
                    theme:'relax',
                    type :'error',
                    text:'PLEASE FILL IN THE REASON YOU ARE TRYING TO CONTACT US!',
                    animation:{
                      open:'animated bounceInCenter',
                      close: 'animated bounceOutLeft',
                      easing: 'swing',
                      speed: 500
                    },closeWith: ['click'],
                     timeout:100

            });
        }
    }else{
      $("#customeremail").css("box-shadow", "0 0 5px red");
          noty({
          layout:'bottomCenter',
          theme:'relax',
          closeWith: ['click'],
          type :'error',
          text:'PLEASE ENTER A VALID EMAIL!',
          animation:{
            open:'animated bounceInCenter',
            close: 'animated bounceOutLeft',
            easing: 'swing',
            speed: 500
          },
           timeout:100
        });
    }

  }else{
    $("#customeremail").css("box-shadow", "0 0 5px red");
    noty({
      layout:'bottomCenter',
      theme:'relax',
      type :'error',
      text:'PLEASE ENTER YOUR EMAIL!',
      animation:{
        open:'animated bounceInCenter',
        close: 'animated bounceOutLeft',
        easing: 'swing',
        speed: 500
      },closeWith: ['click'],
       timeout:1000
    });
  }
});


function emailStatus(message){
  if(message.includes("apologize")){
    noty({
      layout:'bottomCenter',
      theme:'relax',
      type :'error',
      text:message,
      animation:{
        open:'animated bounceInCenter',
        close: 'animated bounceOutLeft',
        easing: 'swing',
        speed: 500
      },closeWith: ['click'],
      timeout:1000
    });
  }else{
    noty({
      layout:'bottomCenter',
      theme:'defaultTheme',
      type :'success',
      text:message,
      animation:{
        open:'animated bounceInCenter',
        close: 'animated bounceOutLeft',
        easing: 'swing',
        speed: 500
      },closeWith: ['click'],
      timeout:2000
    });
  }
}