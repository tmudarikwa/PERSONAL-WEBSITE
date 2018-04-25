var winH = window.innerHeight;
//detecting if site is on mobile device
if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)){
    $('nav').addClass("sticky-top");
    $('.navlink').css("margin","0");
    $('.navlink').css("padding","0");
    $('.navlink').css("width","100%");
    $('.title').removeClass("h1");
    $('.title').addClass("h4");
    $('.navbar-toggler-icon').click(function(){
        if($('.collapse').hasClass('showing')){
            $('.collapse').removeClass("showing");
            $('.collapse').addClass("hidden").slideUp("slow");
            $('html, body').animate({
              scrollTop:$('.container-fluid').offset().top},
              1000);
            $(this).text("MENU");
        }else{
            $('.collapse').removeClass("hidden");
            $('.collapse').addClass("showing").slideDown("slow");
            $('html, body').animate({
              scrollTop:$('.collapse').offset().top},
              1000);
            $(this).text("CLOSE");
        }
      }
    );
   $('#portfoliodetails .content').show();
   $('.portfoliodetail .col-1 img').css('width','2.5rem');

 }else{

    //setting main body content height
    $('.bcontent').css('height',(88/100 * winH)+'px');
    $('.portfolio').css('height',(88/100 * winH)+10+'px');
    //setting footer height
    $('.footer').css('height',(35/100 * winH)+'px');

    //setting portfolio image height sizes
    $('.portfolio-content img').css('height', (70/100 * winH)+'px');
    $('#portfoliodetails img').css('height', (70/100 * winH)+'px');

    //large screen desktop styling
    if(winH > 700){
        $(".img-thumbnail").css('height', (46.2/100 * winH)+'px ');
        $('body').css('font-size',(2.5/100 * winH)+'px');
    }
}

//nav links mouse highlights
$('.navlink').hover(function(){
  if($(this).hasClass("selected")){
  }else{
  	  $(this).css('background-color','black');
      $(this).css('color','white');
      $(this).css('mouse');
  }
}).mouseout(function(){
  if($(this).hasClass("selected")){
  }else{
      $(this).css('background-color','transparent');
  	  $(this).css('color','black');
   }
});

//button mouse higlights
$('button').hover(function(){
  if($(this).hasClass("selected"))
  {}else{
    $(this).css('background-color','black');
    $(this).css('color','white');
    $(this).css('mouse');
  }
}).mouseout(function(){
  if($(this).hasClass("selected"))
  {}else{
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
              }
            });
        }else{
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
    }else{
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

  }else{
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
  if(message.includes("apologize")){
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
  }else{
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
