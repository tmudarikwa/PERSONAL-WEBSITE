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
    
    $('.bcontent').css('height',(79/100 * winH)+'px');  
} 

$('button').hover(function(){
	$(this).css('background-color','black');
	$(this).css('color','white')
  $(this).css('mouse')
}).mouseout(function(){
	$(this).css('background-color','transparent')
	;$(this).css('color','black')
});