var winH = window.innerHeight;
var imgHeight = (70/100 * winH)+'px';
var imgWidth="100%";

/*********
  PORTFOLIO NAVIGATING
*********/
$('.portfolio button').click(function(){
  var direction = $(this).text()
  var currentProject = $('.portfolio h2.projectname').text();
  navigatePortfolio(direction,currentProject)
});

function navigatePortfolio(direction, currentProject){
  if(currentProject.includes("INTERNAL GASCO SALES PORTAL") && direction.startsWith("PREVIOUS")){
      $('.portfolio #previousprojbtn').hide();
      $('.portfolio #nextprojbtn').show();
      $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                              +"<a href='portalgascoonline'>\n"
                                               +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalfrewprocess.png' style='height:"+imgHeight+";width:"+imgWidth+"'  alt='fpg sales portal web application picture'/>\n"
                                               +"</a>\n"
                                               +"</div>\n"
                                               +"<div class='col'>\n"
                                                 +"<h2 class='projectname'> PROJECT NAME: INTERNAL FPG SALES PORTAL</h2>\n"
                                                 +"<p class='role'> ROLE: Designer, front & back-end coder</p>\n"
                                                 +"<p class='skills'>  TECHNOLOGIES: J2EE, HTML, HTML5, AJAX, jQuery, CSS, PostgreSQL</p>\n"
                                                 +"<p class='description'> DESCRIPTION: This is an internal sales portal which serves to make it easier for sales people to set and target customer to focus on. Though this was the main idea the application does far more than that from displaying a snap shot of the companys' revenue through graphs to mapping customers on a map using google maps API and also uploading excel data to a Postgres database.</p>"
                                                 +"<p class='link'>LINK: \n"
                                                 +"<a href='http://portal.frewprocess.com' title='Frewprocess portal website' target='_blank'>http://portal.frewprocess.com</a></p>\n"
                                               +"</a>\n"
                                              +"</div>");
  }else if(currentProject.includes("INTERNAL FPG SALES PORTAL") && direction.startsWith("NEXT") || currentProject.includes("MUMOAFRUIKA") && direction.startsWith("PREVIOUS")){
        $('.portfolio #previousprojbtn').show();
        $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                                +"<a href='portalgascoonline'>\n"
                                                 +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/portalgascoonline.png' style='height:"+imgHeight+";width:"+imgWidth+"' alt='gasco salesportal web application picture'/>\n"
                                                 +"</a>\n"
                                                 +"</div>\n"
                                                 +"<div class='col'>\n"
                                                   +"<h2 class='projectname'> PROJECT NAME: INTERNAL GASCO SALES PORTAL</h2>\n"
                                                   +"<p class='role'> ROLE: Designer, front & back-end coder</p>\n"
                                                   +"<p class='skills'>  TECHNOLOGIES: J2EE, HTML, HTML5, AJAX, jQuery, CSS, PostgreSQL</p>\n"
                                                   +"<p class='description'> DESCRIPTION: This is an internal sales portal which serves to make it easier for sales people to set and target customer to focus on. Though this was the main idea the application does far more than that from displaying a snap shot of the companys' revenue through graphs to mapping customers on a map using google maps API and also uploading excel data to a Postgres database.</p>"
                                                   +"<p class='link'>LINK: \n"
                                                   +"<a href='http://portal.gascoonline.com' title='Gasco portal website'target='_blank'>http://portal.gascoonline.com</a></p>\n"
                                                 +"</a>\n"
                                                +"</div>");
    } else if (currentProject.includes("INTERNAL GASCO SALES PORTAL") && direction.startsWith("NEXT") || currentProject.includes("GERFUSA") && direction.startsWith("PREVIOUS")){
        $('.portfolio #previousprojbtn').show();
        $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                                +"<a href='mumoafruika'>\n"
                                                 +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/mumoafruika.png' style='height:"+imgHeight+";width:"+imgWidth+"'  alt='mumoafruika web application picture'/>\n"
                                                 +"</a>\n"
                                                 +"</div>\n"
                                                 +"<div class='col'>\n"
                                                   +"<h2 class='projectname'> PROJECT NAME: MUMOAFRUIKA</h2>\n"
                                                   +"<p class='role'> ROLE : Designer , front & back-end coder, database architect</p>\n"
                                                   +"<p class='skills'> TECHNOLOGIES: NodeJS, HTML, JQuery, MongoDB, Express, Mandrill, Heroku</p>\n"
                                                   +"<p class='description'> DESCRIPTION: This a web page that curates information and as well serves as a way to update the progress on the actual MuMoAfruika platform.</p>"
                                                   +"<a href='https://github.com/tmudarikwa/MuMoAfruika' target='_blank'>\n"
                                                   +"<p class='link'>GITHUB: https://github.com/tmudarikwa/MuMoAfruika</p>\n"
                                                   +"<p class='link'>LINK: \n"
                                                   +"<a href='http://www.mumoafruika.com' title='MuMoAfruika website' target='_blank'>http://www.mumoafruika.com</a></p>\n"
                                                 +"</a>\n"
                                                +"</div>");
    } else if(currentProject.includes("MUMOAFRUIKA") && direction.startsWith("NEXT") || currentProject.includes("EXPENSE ALLOCATION") && direction.startsWith("PREVIOUS")){
        $('.portfolio #previousprojbtn').show();
        $('.portfolio #nextprojbtn').show();
        $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                                +"<a href='gerfusa'>\n"
                                                 +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/gerfusa.png' style='height:"+imgHeight+";width:"+imgWidth+"'  alt='gerfusa web application picture'/>\n"
                                                 +"</a>\n"
                                                 +"</div>\n"
                                                 +"<div class='col'>\n"
                                                   +"<h2 class='projectname'> PROJECT NAME: GERFUSA (still in development)</h2>\n"
                                                   +"<p class='role'> ROLE: Designer, front & back-end coder, database architect </p>\n"
                                                   +"<p class='skills'> TECHNOLOGIES: NodeJS, HTML, CSS, JQuery, MongoDB, Express, MailChimp, Mandrill,Heroku</p>\n"
                                                   +"<p class='description'> DESCRIPTION: This web application is for a service and errands company which will enable customers to buy and schedule groceries/errands. It also has a customer chat interface plus a employee portal to facilitate retrieving the orders and other company/customer data.</p>"
                                                   +"<a href='https://github.com/tmudarikwa/GERFUSA' target='_blank'>\n"
                                                   +"<p class='link'>GITHUB: https://github.com/tmudarikwa/GERFUSA</p>\n"
                                                   +"<p class='link'>LINK: \n"
                                                   +"<a href='http://salty-mountain-65693.herokuapp.com/' title='GERF website' target='_blank'>http://salty-mountain-65693.herokuapp.com/</a></p>\n"
                                                 +"</a>\n"
                                                +"</div>");
    } else if(currentProject.includes("GERFUSA") && direction.startsWith("NEXT") || currentProject.includes("REPLICATION TRACE") && direction.startsWith("PREVIOUS")){
        $('.portfolio #previousprojbtn').show();
        $('.portfolio #nextprojbtn').show();
        $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                                +"<a href='#'>\n"
                                                 +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/expense_allocation_metrics.JPG' style='height:"+imgHeight+";width:"+imgWidth+"'  alt='expense allocation metrics application picture'/>\n"
                                                 +"</a>\n"
                                                 +"</div>\n"
                                                 +"<div class='col'>\n"
                                                   +"<h2 class='projectname'> PROJECT NAME: EXPENSE ALLOCATION METRICS WINDOWS DESKTOP APPLICATION</h2>\n"
                                                   +"<p class='role'> ROLE: GUI Designer & programmer </p>\n"
                                                   +"<p class='skills'> TECHNOLOGIES: C#, WPF</p>\n"
                                                   +"<p class='description'> DESCRIPTION: This desktop application was intended to ease the bi-weekly accounting and warehouse split calculations. The clients shared accounting and warehouse personel but always had to track payments owed from each client by means of querying invoices and orders processed by each department for each client. Migrated the queries from MySQL to Postgres and build a windows GUI application.</p>"
                                                   +"<p class='link'>LINK: \n"
                                                   +"<a href='#'>http://salty-mountain-65693.herokuapp.com/</a></p>\n"
                                                 +"</a>\n"
                                                +"</div>");
    }  else if(currentProject.includes("EXPENSE ALLOCATION") && direction.startsWith("NEXT")){
        $('.portfolio #previousprojbtn').show();
        $('.portfolio #nextprojbtn').hide();
        $('.portfolio .portfolio-content').html("<div class='col-8'> \n"
                                                +"<a href='#'>\n"
                                                 +"<img class='img-fluid mx-auto d-block ' src='images/portifolio/replication_trace.JPG' style='height:"+imgHeight+";width:"+imgWidth+"'  alt='replication trace application picture'/>\n"
                                                 +"</a>\n"
                                                 +"</div>\n"
                                                 +"<div class='col'>\n"
                                                   +"<h2 class='projectname'> PROJECT NAME: REPLICATION TRACE WINDOWS DESKTOP APPLICATION</h2>\n"
                                                   +"<p class='role'> ROLE: GUI Designer & programmer </p>\n"
                                                   +"<p class='skills'> TECHNOLOGIES: C# & WPF</p>\n"
                                                   +"<p class='description'> DESCRIPTION: This desktop application was built inorder to trace duplicate records in a table. The application will return all the records that are identical from the table which it attains by individually checking each record in the table.</p>"
                                                   +"<p class='link'>LINK: \n"
                                                   +"<a href='#'>http://salty-mountain-65693.herokuapp.com/</a></p>\n"
                                                 +"</a>\n"
                                                +"</div>");
    }
      //calling checkMobile function after every project has been rendered to ensure appropriate styling
      checkMobile();
}

function checkMobile(){
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)  || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)){
      imgHeight="auto";
      $('.col-8 img').removeClass('img-fluid');
      $('.col-8 img').removeClass('mx-auto');
      $('.col-8 img').removeClass('d-block');
      $('.col-8 img').css('width','156%');
    }
}
//invoking function
checkMobile();
