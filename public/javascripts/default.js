var winH = window.innerHeight;
$('.bcontent').css('height',(79/100 * winH)+'px');

$('button').hover(function(){
	$(this).css('background-color','black');
	$(this).css('color','white')
  $(this).css('mouse')
}).mouseout(function(){
	$(this).css('background-color','transparent')
	;$(this).css('color','black')
});