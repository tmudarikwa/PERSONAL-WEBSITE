//stopping carousel cycling
function setVisibility(){
  $('#portfoliodetails').children().hide();
  $('#portfoliodetails').children('.active').show();
}
setVisibility;

//navigation through a selected projects details (when a user clicks on a projects image whilst on /portfolio)
$('.portfoliodetail button').click(function(){
  var direction = $(this).text();
  var currentItem = $('#portfoliodetails').children('.active').attr('id');
  var nextItem, prevItem;

  if(direction.startsWith('NEXT')) nextItem +=1;
  if(direction.startsWith('PREVIOUS')) prevItem -=1;

  //checking if nextItem id exists
  var checkNextItem = $('#portfoliodetails').has("#"+nextItem+"").length;
  var checkPrevItem = $('#portfoliodetails').has("#"+prevItem+"").length;

  var numOfItems = $('#portfoliodetails').children().length;

  //displaying next or prev item
  if(checkNextItem == 1 && nextItem > 1 && nextItem < numOfItems && direction.startsWith('NEXT')){
    $("#portfoliodetails #"+nextItem+"").addClass('.active');
    $('#portfoliodetails').children('.active').show();
    $("#previousportfoliobtn").show();
  }else if(checkNextItem == 1 && nextItem == numOfItems && direction.startsWith('NEXT')){
    $("#portfoliodetails #"+nextItem+"").addClass('.active');
    $('#portfoliodetails').children('.active').show();
    $("#previousportfoliobtn").show();
    $("#nextportfoliobtn").hide()
  }else if(checkPrevItem == 1 && prevItem == 1 && direction.startsWith('PREVIOUS')){
    $("#portfoliodetails #"+prevItem+"").addClass('.active');
    $('#portfoliodetails').children('.active').show();
    $("#previousportfoliobtn").hide();
  }else if(checkPrevItem == 1 && prevItem > 1 && direction.startsWith('PREVIOUS')){
    $("#portfoliodetails #"+prevItem+"").addClass('.active');
    $('#portfoliodetails').children('.active').show();
    $("#previousportfoliobtn").show();
  }

  //removing active class from currentItem
  $("#portfoliodetails #"+currentItem+"").removeClass('.active');
  //setting Visibility
  setVisibility;
});
