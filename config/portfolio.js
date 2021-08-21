let getPortfolio = () => {
    const portfolio = [
                    {
                        projectName: "CHILLYBARRELS (WOOCOMMERCE)",
                        role: "Server setup and configuration, Ecommerce & database setup, Frontend development",
                        techStack: "WooCommerce,WordPress, MySQL, AWS (Lightsail), CPanel, Google Maps API",
                        description: "This is a liquor buying and delivery site built on Magento2 ecommerce platform.",
                        github:"None",
                        url:"https://pixykorner.co.za/chillybarrels",
                        imgPath:"/portfolio/chillybarrels-woocommerce"
                    },
                    {
                        projectName: "CHILLYBARRELS PORTAL",
                        role: "Front & backend developer, database architect and developer",
                        techStack: "NodeJS, MongoDB, GoogleMaps API, Magento2 API, Tookan API, Twilio , Heroku",
                        description: "Primarily built as the access portal for our affliates. To aid the ChillyBarrels ecommerce site, I created the portal to be able to leverage Magento2 API and the delivery system's API(tookan) together with several other API integrations to provide an inclusive order notification and tracking to all the affliated stores.",
                        github:"None",
                        url:"https://portal-chillybarrels.herokuapp.com",
                        imgPath:"/portfolio/chillybarrels-portal"
                    },
                    {
                        projectName: "CHILLYBARRELS (MAGENTO)",
                        role: "Server setup and configuration, Ecommerce & database setup, Frontend development",
                        techStack: "Magento2, Ubuntu, MySQL, AWS",
                        description: "This is a liquor buying and delivery site built on Magento2 ecommerce platform.",
                        github:"None",
                        url:"#",
                        imgPath:"/portfolio/chillybarrels"
                    },
                    {
                        projectName: "ADB Delivery Services",
                        role: "Front & backend developer, database architect and developer",
                        techStack: "NodeJS, HTML, CSS, bootstrap, JavaScript, JQuery, Express, Heroku, MongoDB, GoogleMaps API, Square API",
                        description: "I did the front and back end developing for a delivering service company. The main thing they wanted was for their customers to be able to schedules appointments online, make payments, join their mailing list and be able to leave reviews.",
                        github:"None",
                        url:"https://www.adbdeliveryservices.com/",
                        imgPath:"/portfolio/adbdeliveryservices"
                    },
                    {
                        projectName: "POTENCITY",
                        role: "Designer , front & backend developer, database architect and developer",
                        techStack: "NodeJS, Express, AJAX, jQuery, CSS, MongoDB, Twilio, Mandrill, MailChimp",
                        description: "A talent search application that takes the usual bias out of the way. It provides a diverse pool of talent for companies whilst also giving back to the community.",
                        github:"None",
                        url:"https://potencity.herokuapp.com",
                        imgPath:"/portfolio/potencity"
                    },
                    {
                        projectName: "GIRL CHILD OUTREACH",
                        role: "Designer, frontend developer",
                        techStack: "NodeJS, HTML, CSS, bootstrap, JavaScript, JQuery, Express, Mandrill, Heroku",
                        description: "Designed the layout and did front end developing for a concept page for a Girl Child charity.",
                        github:"None",
                        url:"http://girlchildoutreach.herokuapp.com/",
                        imgPath:"#"
                    },
                    {
                        projectName: "INTERNAL FPG SALES PORTAL",
                        role: "Designer , front & backend developer, database developer",
                        techStack: "JAVA EE, HTML, HTML5, AJAX, jQuery, CSS, PostgreSQL, D3.JS, GoogleMaps API",
                        description: "This is an internal sales portal which serves to make it easier for sales people to set and target customer to focus on. Though this was the main idea the application does far more than that from displaying a snap shot of the companys' revenue through graphs to mapping customers on a map using google maps API and also uploading excel data to a Postgres database.",
                        github:"None",
                        url:"http://portal.frewprocess.com",
                        imgPath:"/portfolio/fpg"
                    },
                    {
                        projectName: "INTERNAL GASCO SALES PORTAL",
                        role: "Designer , front & backend developer, database developer",
                        techStack: "JAVA EE, HTML, HTML5, AJAX, jQuery, CSS, PostgreSQL, D3.JS, GoogleMaps API",
                        description: "This is an internal sales portal which serves to make it easier for sales people to set and target customer to focus on. Though this was the main idea the application does far more than that from displaying a snap shot of the companys' revenue through graphs to mapping customers on a map using google maps API and also uploading excel data to a Postgres database.",
                        github:"None",
                        url:"http://portal.gascoonline.com",
                        imgPath:"/portfolio/gasco"
                    },
                    {
                        projectName: "MUMOAFRUIKA-LANDING PAGE",
                        role: "Designer , front & backend developer, database architect and developer",
                        techStack: "NodeJS, HTML, JQuery, MongoDB, Express, Mandrill, Heroku",
                        description: "This a web page that curates information and as well serves as a way to update the progress on the actual MuMoAfruika platform.",
                        github:"https://github.com/tmudarikwa/MuMoAfruika",
                        url:"#",
                        imgPath:"/portfolio/mumoafruika-landing"
                    },
                    {
                        projectName: "MUMOAFRUIKA-PLATFORM - UI",
                        role: "Frontend developer",
                        techStack: "HTML5 , CSS, Bootstrap, JQUERY, Javascript, Photoshop",
                        description: "This is the UI concept for the comming soon MuMoAfruika plaform. Currently focusing on the responsive web version.",
                        github:"None",
                        url:"#",
                        imgPath:"/portfolio/mumoafruika-platform"
                    },
                    {
                        projectName: "GERFUSA",
                        role: "Designer, frontend & backend developer, database architect and developer",
                        techStack: "NodeJS, HTML, CSS, JavaScript, JQuery, MongoDB, Express, MailChimp, Twilio, Mandrill,Heroku",
                        description: "This web application is for a service and errands company which will enable customers to buy and schedule groceries/errands. It also has a customer chat interface plus a employee portal to facilitate retrieving the orders and other company/customer data.",
                        github:"https://github.com/tmudarikwa/GERFUSA",
                        url:"http://www.gerfusa.com",
                        imgPath:"/portfolio/gerfusa"
                    },
                    {
                        projectName: "REPLICATION TRACE WINDOWS DESKTOP APPLICATION",
                        role: "GUI Designer & programmer",
                        techStack: "C# & WPF",
                        description: "This desktop application was built inorder to trace duplicate records in a table. The application will return all the records that are identical from the table which it attains by individually checking each record in the table.",
                        github:"None",
                        url:"#",
                        imgPath:"/portfolio/gerfusa"
                    },
                    {
                        projectName: "EXPENSE ALLOCATION METRICS WINDOWS DESKTOP APPLICATION",
                        role: "GUI Designer & programmer",
                        techStack: "C# & WPF",
                        description: "This desktop application was intended to ease the bi-weekly accounting and warehouse split calculations. The clients shared accounting and warehouse personel but always had to track payments owed from each client by means of querying invoices and orders processed by each department for each client. Migrated the queries from MySQL to Postgres and build a windows GUI application.",
                        github:"None",
                        url:"#",
                        imgPath:"/portfolio/expense"
                    }

            ]
    return portfolio;
};
module.exports.getPortfolio = getPortfolio;
