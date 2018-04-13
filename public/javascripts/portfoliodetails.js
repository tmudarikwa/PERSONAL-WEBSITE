//stopping carousel cycling
$('#portfoliodetails').children().hide();
$('#portfoliodetails').children('.active').show();

//navigation through a selected projects details (when a user clicks on a projects image whilst on /portfolio)
$('.portfoliodetail btn').click(function(){
  var direction = $(this).text();
  var currentItem = $(this).children('.active').attr('id');
  console.log(currentItem);
});
