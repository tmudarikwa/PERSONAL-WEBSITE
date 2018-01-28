var winH = window.innerHeight;
var imgheight = (70/100 * winH)+'px';
if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)) imgheight="auto";
var imgwidth="100%";

/*********
  PORTFOLIO NAVIGATING
*********/
$('.portfolio #nextprojbtn').click(function(){ 
  var title = $('.portfolio p.projectname').text();

  if(title.includes("INTERNAL FPG SALES PORTAL"))
  {
    $('.portfolio #previousprojbtn').show();
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalgascoonline.png' style='height:"+imgheight+";width:"+imgwidth+"' alt='gasco salesportal picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
                                               +"<p class='projectname'> PROJECT NAME: INTERNAL GASCO SALES PORTAL</p>\n"
                                               +"<p class='role'> ROLE: Designer, front & back-end coder</p>\n"
                                               +"<p class='skills'> J2EE, HTML, HTML5, AJAX, jQuery, CSS, PostgreSQL</p>\n"  
                                               +"<p class='description'> DESCRIPTION: This is a internal sales portal which serves to make it easier for sales people to set and target customer to focus on. Though this was the main idea the application does far more than that from displaying a snap shot of the companys' revenue through graphs to mapping customers on a map using google maps API and also uploading excel data to a Postgres database.</p>"
                                               +"<a href='http://portal.gascoonline.com' target='_blank'>\n"
                                               +"<p class='link'>LINK: http://portal.gascoonline.com</p>\n"
                                             +"</a>\n"
                                            +"</div>"
      );
  }
  else if (title.includes("INTERNAL GASCO SALES PORTAL"))
  {
    $('.portfolio #previousprojbtn').show();
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='mumoafruika'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/mumoafruika.png' style='height:"+imgheight+";width:"+imgwidth+"'  alt='mumoafruika project picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
                                               +"<p class='projectname'> PROJECT NAME: MUMOAFRUIKA</p>\n"
                                               +"<p class='role'> ROLE : Designer , front & back-end coder, database architect</p>\n"
                                               +"<p class='skills'> TECHNOLOGIES: NodeJS, HTML, JQuery, MongoDB, Express, Mandrill, Heroku</p>\n"  
                                               +"<p class='description'> DESCRIPTION: This a web page that curates information and as well serves as a way to update the progress on the actual MuMoAfruika platform.</p>"
                                               +"<a href='http://www.mumoafruika.com' target='_blank'>\n"
                                               +"<p class='link'>LINK: http://www.mumoafruika.com</p>\n" 
                                             +"</a>\n"
                                            +"</div>"
      );
  }
  else if(title.includes("MUMOAFRUIKA"))
  {
    $('.portfolio #previousprojbtn').show();
    $('.portfolio #nextprojbtn').hide();
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/gerfusa.png' style='height:"+imgheight+";width:"+imgwidth+"'  alt='gerfusa project picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
                                               +"<p class='projectname'> PROJECT NAME: GERFUSA still in development</p>\n"
                                               +"<p class='role'> ROLE: Designer, front & back-end coder, database architect </p>\n"
                                               +"<p class='skills'> TECHNOLOGIES: NodeJS, HTML, CSS, JQuery, MongoDB, Express, MailChimp, Mandrill,Heroku</p>\n"  
                                               +"<p class='description'> DESCRIPTION: This web application is for a service and errands company which will enable customers to buy and schedule groceries/errands. It also has a customer chat interface plus and employee portal to facilitate retrieving the orders and all.</p>"
                                               +"<a href='http://salty-mountain-65693.herokuapp.com/' target='_blank'>\n"
                                               +"<p class='link'>LINK: http://salty-mountain-65693.herokuapp.com/</p>\n"
                                             +"</a>\n"
                                            +"</div>"
      );
  }
});

$('.portfolio #previousprojbtn').click(function(){
  var title = $('.portfolio p.projectname').text();

  if(title.includes("INTERNAL GASCO SALES PORTAL"))
  {
    $('.portfolio #previousprojbtn').hide();
    $('.portfolio #nextprojbtn').show();
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalfrewprocess.png' style='height:"+imgheight+";width:"+imgwidth+"'  alt='fpg sales portal picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
                                               +"<p class='projectname'> PROJECT NAME: INTERNAL FPG SALES PORTAL</p>\n"
                                               +"<p class='role'> ROLE: Designer, front & back-end coder</p>\n"
                                               +"<p class='skills'> J2EE, HTML, HTML5, AJAX, jQuery, CSS, PostgreSQL</p>\n"  
                                               +"<p class='description'> DESCRIPTION: This is a internal sales portal which serves to make it easier for sales people to set and target customer to focus on. Though this was the main idea the application does far more than that from displaying a snap shot of the companys' revenue through graphs to mapping customers on a map using google maps API and also uploading excel data to a Postgres database.</p>"
                                               +"<a href='http://portal.frewprocess.com' target='_blank'>\n"
                                               +"<p class='link'>LINK: http://portal.frewprocess.com</p>\n"
                                             +"</a>\n"
                                            +"</div>"
      );
  }
  else if (title.includes("MUMOAFRUIKA"))
  {
    $('.portfolio #previousprojbtn').show();
    $('.portfolio #nextprojbtn').show();
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalgascoonline.png' style='height:"+imgheight+";width:"+imgwidth+"'  alt='gasco salesportal picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
                                               +"<p class='projectname'> PROJECT NAME: INTERNAL GASCO SALES PORTAL</p>\n"
                                               +"<p class='role'> ROLE: Designer, front & back-end coder</p>\n"
                                               +"<p class='skills'> J2EE, HTML, HTML5, AJAX, jQuery, CSS, PostgreSQL</p>\n"  
                                               +"<p class='description'> DESCRIPTION: This is a internal sales portal which serves to make it easier for sales people to set and target customer to focus on. Though this was the main idea the application does far more than that from displaying a snap shot of the companys' revenue through graphs to mapping customers on a map using google maps API and also uploading excel data to a Postgres database.</p>"
                                               +"<a href='http://portal.gascoonline.com' target='_blank'>\n"
                                               +"<p class='link'>LINK: http://portal.gascoonline.com</p>\n"
                                             +"</a>\n"
                                            +"</div>"
      );
  }
  else if(title.includes("GERFUSA"))
  {
    $('.portfolio #previousprojbtn').show();
    $('.portfolio #nextprojbtn').show();
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='mumoafruika'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/mumoafruika.png' style='height:"+imgheight+";width:"+imgwidth+"'  alt='mumoafruika project picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
                                               +"<p class='projectname'> PROJECT NAME: MUMOAFRUIKA</p>\n"
                                               +"<p class='role'> ROLE : Designer , front & back-end coder, database architect</p>\n"
                                               +"<p class='skills'> TECHNOLOGIES: NodeJS, HTML, JQuery, MongoDB, Express, Mandrill, Heroku</p>\n"  
                                               +"<p class='description'> DESCRIPTION: This a web page that curates information and as well serves as a way to update the progress on the actual MuMoAfruika platform.</p>"
                                               +"<a href='http://www.mumoafruika.com' target='_blank'>\n"
                                               +"<p class='link'>LINK: http://www.mumoafruika.com</p>\n" 
                                             +"</a>\n"
                                            +"</div>"
      );
  }
});