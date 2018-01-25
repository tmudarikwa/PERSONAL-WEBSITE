/*********
  PORTFOLIO NAVIGATING
*********/
$('.portfolio #nextprojbtn').click(function(){
  console.log("clicked nextprojbtn");
  var title = $('.portfolio p.title').text();

  if(title.includes("INTERNAL FPG SALES PORTAL"))
  {
    $('.portfolio #previousprojbtn').show();
    $('.portfolio p.title').text('PORTFOLIO - INTERNAL GASCO SALES PORTAL');
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalgascoonline.png', alt='gasco salesportal picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
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
    $('.portfolio p.title').text('PORTFOLIO - MUMOAFRUIKA');
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='mumoafruika'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/mumoafruika.png', alt='mumoafruika project picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
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
    $('.portfolio p.title').text('PORTFOLIO - GERFUSA still in development');
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalgascoonline.png', alt='gerfusa project picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
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
  var title = $('.portfolio p.title').text();

  if(title.includes("INTERNAL GASCO SALES PORTAL"))
  {
    $('.portfolio #previousprojbtn').hide();
    $('.portfolio #nextprojbtn').show();
    $('.portfolio p.title').text('PORTFOLIO - INTERNAL FPG SALES PORTAL');
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalfrewprocess.png', alt='fpg sales portal picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
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
    $('.portfolio p.title').text('PORTFOLIO - INTERNAL GASCO SALES PORTAL');
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='portalgascoonline'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalgascoonline.png', alt='gasco salesportal picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
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
    $('.portfolio p.title').text('PORTFOLIO - MUMOAFRUIKA');
    $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                            +"<a href='mumoafruika'>\n"
                                             +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/mumoafruika.png', alt='mumoafruika project picture'/>\n"
                                             +"</a>\n"
                                             +"</div>\n"
                                             +"<div class='col'>\n"
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