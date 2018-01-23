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
    $('.bcontent').css('height',(79/100 * winH)+'px'); 

    //setting footer height
    $('.footer').css('height',(10/100 * winH)+'px'); 
} 

$('button').hover(function(){
  if($(this).hasClass("selected"))
  {
   console.log('doing nothing because button already highlighted');
  }
  else{
	  $(this).css('background-color','black');
    $(this).css('color','white');
    $(this).css('mouse');
  }
}).mouseout(function(){
  if($(this).hasClass("selected"))
  {
    console.log('doing nothing because button already highlighted');
  }
  else
  {	
    $(this).css('background-color','transparent');
	   $(this).css('color','black');
   }
});