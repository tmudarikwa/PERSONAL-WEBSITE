/*****************************************************************************************
MOBILE DEVICES CODING
*****************************************************************************************/
const heightX = document.body.clientHeight;
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
  ['Every job is a self potrait for a person who did it.','UNKOWN'],
  ['Small steps add up to complete big journeys.','Matshona Dhliwayo'],
  ['Before software should be reusable, it should be usable.','Ralph Johnson'],
  ['Simplicity carried to the extreme, becomes elegance', 'Jon Franklin']
];
let getRanInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const index= getRanInt(11);
window.addEventListener('load', function(){
  $(".navbar-nav").sticky();
  $('.blockquote p').text(quotes[index][0]);
  $('.blockquote-footer').text(quotes[index][1]);
  setTimeout(function(){
  $('#loader').hide();
  $('.container-fluid').fadeIn('slow');
  },3000);
});
/****************************
   NAVIGATION
****************************/
$('.nav-item').click(function(e){
  e.preventDefault();
  let txt = e.target.innerText.toLowerCase();
  if (txt.includes("résumé") == false){
    $('html,body').animate({
      scrollTop: $("#"+txt).offset().top}
    , 1300);
    if(txt != 'home') ScrollReveal().reveal("#"+txt,{delay:600});
    if(txt == 'skills'){
      $('#skillsgraph').html("");
      skillsGraph("#skillsgraph");
    }
  }else{
    window.open('/TAKUNDAEUGENEMUDARIKWA-RESUME', target='_blank');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if(window.location.href.includes("#portfolio")){
    $(document).ready(function(){
      $('html,body').animate({
        scrollTop:$('#portfolio').offset().top
      },'slow');
    });
  }
});
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
let contactusform = ($("#emailfromcustomer").html());
$("#emailfromcustomer button").click((e) =>{
  e.preventDefault();

  let email = $("#customeremail").val();
  let format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let customertext = $("#customertext").val();

  //validation first
  if (email.length > 0 ){
    if(format.test(email) == true){
        if (customertext.length > 0){
            $('.alert').html("");
            let data = {};
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
              }
            });
        }else{
            $("#customertext").css("border", "1px solid red");
            overlayNotification("error","PLEASE FILL IN THE REASON YOU ARE TRYING TO CONTACT US!");
        }
    }else{
      $("#customeremail").css("border", "1px solid red");
      overlayNotification("error","PLEASE ENTER A VALID EMAIL!");
    }

  }else{
    $("#customeremail").css("border", "1px solid red");
    overlayNotification("error","PLEASE ENTER YOUR EMAIL!");
  }
});

let overlayNotification = (notyType,notyText) => {
  let noty = new Noty({
    layout:'bottomCenter',
    theme:'light',
    type :notyType,
    text:notyText,
    animation: {
      open: 'animated bounceInRight',
      close: 'animated bounceOutRight' 
    },
    closeWith:['click','button']
  });
  noty.setTimeout(10)
  noty.show();
  triggerNotyClose();
}

let emailStatus = (message) => {
  if(message.includes("apologize")){
    overlayNotification("error",message);
  }else{
    overlayNotification("success",message);
  }
}

let triggerNotyClose = () => {
  $('.noty_bar').click(function(e){
    $(this).hide();
  });
  $('.noty_close_button').click(function(e){
    $(this).parent().hide();
  });
}


/**********
 * 
 *  MISC EDIT ROUND
 * ********** */
function addRow()
{
  let tableData = document.getElementsByClassName("table")[0].tBodies[0].innerHTML;
  console.log("About to add a row");
  document.getElementsByClassName("table")[0].tBodies[0].innerHTML = tableData + '<tr> <td><input name="count" value="" ></td><td><input name="month" value="" ></td><td><input name="day" value="1"></td><td><input name="name" value="" ></td><td> <input name="amount" value="100"></td></tr>';
  console.log("Row Added!");
}
