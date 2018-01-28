var winH = window.innerHeight;
//detecting if site is on mobile device 
if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i))
 {
    console.log(+navigator.userAgent);
 }
else
{    

    //setting main body content height
    $('.bcontent').css('height',(88/100 * winH)+'px'); 
    $('.portfolio').css('height',(88/100 * winH)+10+'px'); 
    //setting footer height
    $('.footer').css('height',(12/100 * winH)+'px'); 

    //setting portfolio image height sizes
    $('.portfolio img').css('height', (70/100 * winH)+'px');

    //large screen desktop styling
    if(winH > 700)
    {
      $(".img-thumbnail").css('height', (46.2/100 * winH)+'px ');
      $('body').css('font-size',(2.5/100 * winH)+'px');
      $('.portfolio button').css('margin-top','-15px');

    }
} 

//nav links mouse highlights
$('.navlink').hover(function(){
  if($(this).hasClass("selected"))
  {
   
  }
  else{
	  $(this).css('background-color','black');
    $(this).css('color','white');
    $(this).css('mouse');
  }
}).mouseout(function(){
  if($(this).hasClass("selected"))
  {

  }
  else
  {	
    $(this).css('background-color','transparent');
	   $(this).css('color','black');
   }
});

//button mouse higlights
('button').hover(function(){
  if($(this).hasClass("selected"))
  {
   
  }
  else{
    $(this).css('background-color','black');
    $(this).css('color','white');
    $(this).css('mouse');
  }
}).mouseout(function(){
  if($(this).hasClass("selected"))
  {

  }
  else
  { 
    $(this).css('background-color','transparent');
     $(this).css('color','black');
   }
});

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
  if (email.length > 0 )
  {
    if(format.test(email) == true)
    {
        if (customertext.length > 0)
        {
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
              }
            });
        }
        else
        {
            $("#customertext").css("box-shadow", "0 0 5px red");
                    noty({
                    layout:'top',
                    theme:'defaultTheme',
                    type :'error',
                    text:'PLEASE FILL IN THE REASON YOU ARE TRYING TO CONTACT US!',
                    animation:{
                      open:'animated bounceInCenter',
                      close: 'animated bounceOutLeft',
                      easing: 'swing',
                      speed: 500
                    }

            });
        }
    }
    else 
    {
      $("#customeremail").css("box-shadow", "0 0 5px red");
          noty({
          layout:'top',
          theme:'defaultTheme',
          type :'error',
          text:'PLEASE ENTER A VALID EMAIL!',
          animation:{
            open:'animated bounceInCenter',
            close: 'animated bounceOutLeft',
            easing: 'swing',
            speed: 500
          }

        });
    }
 
  }
  else
  {
    $("#customeremail").css("box-shadow", "0 0 5px red");
    noty({
      layout:'top',
      theme:'defaultTheme',
      type :'error',
      text:'PLEASE ENTER YOUR EMAIL!',
      animation:{
        open:'animated bounceInCenter',
        close: 'animated bounceOutLeft',
        easing: 'swing',
        speed: 500
      },
       timeout:2000
    });
  }
});


function emailStatus(message){
  if(message.includes("apologize"))
  {
    noty({
      layout:'top',
      theme:'defaultTheme',
      type :'error',
      text:message,
      animation:{
        open:'animated bounceInCenter',
        close: 'animated bounceOutLeft',
        easing: 'swing',
        speed: 500
      },
      timeout:2000
    });
  }
  else 
  {
    noty({
      layout:'top',
      theme:'defaultTheme',
      type :'success',
      text:message,
      animation:{
        open:'animated bounceInCenter',
        close: 'animated bounceOutLeft',
        easing: 'swing',
        speed: 500
      },
      timeout:2000
    });  
  }
}
