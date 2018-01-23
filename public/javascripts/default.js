var winH = window.innerHeight;
$('.bcontent').css('height',(79/100 * winH)+'px');

$('button').hover(function(){
	$(this).css('background-color','black');
	$(this).css('color','white')
}).mouseout(function(){
	$(this).css('background-color','#000000ad')
	;$(this).css('color','black')
});