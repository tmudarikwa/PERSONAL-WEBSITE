let getPortfolio = () => {
    const portfolio = {
                        portfolio:[
                                {
                                    projectName: "Mii App (CURRENT PROJECT)",
                                    role: "Developer",
                                    techStack: "Java, Android Studio, SQLite Database",
                                    description: "An Android app for promoting a healthy mind",
                                    github:"https://github.com/tmudarikwa/Mii",
                                    url:"#",
                                    imgPath:"#"
                                },
                                {
                                    projectName: "CHILLYBARRELS (WOOCOMMERCE)",
                                    role: "Server setup and configuration, Ecommerce & database setup, Frontend development",
                                    techStack: "WooCommerce,WordPress, MySQL, AWS (Lightsail), CPanel, Google Maps API",
                                    description: "This is a liquor buying and delivery site built on Magento2 ecommerce platform.",
                                    github:"None",
                                    url:"#",
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
                                    url:"http://www.adbdeliveryservices.com/",
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
                                    url:"#",
                                    imgPath:"/portfolio/gasco"
                                },
                                {
                                    projectName: "MUMOAFRUIKA-LANDING PAGE",
                                    role: "Designer , front & backend developer, database architect and developer",
                                    techStack: "NodeJS, HTML, JQuery, MongoDB, Express, Mandrill, Heroku",
                                    description: "This a web page that curates information and as well serves as a way to update the progress on the actual MuMoAfruika platform.",
                                    github:"https://github.com/tmudarikwa/MuMoAfruika",
                                    url:"https://mumoafruika.herokuapp.com/",
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
                                    imgPath:"/portfolio/replicationtrace"
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
                            ],skills:
                                [
                                    {
                                    label: "AJAX",
                                    value: "Ajax"
                                    },
                                    {
                                    label: "ANDROID",
                                    value: "Android"
                                    },
                                    {
                                    label: "AWS",
                                    value: "Aws"
                                    },
                                    {
                                    label: "BOOTSTRAP",
                                    value: "Bootstrap"
                                    },
                                    {
                                    label: "C#",
                                    value: "C#"
                                    },
                                    {
                                    label: "CSS",
                                    value: "Css"
                                    },
                                    {
                                    label: "CPANEL",
                                    value: "Cpanel"
                                    },
                                    {
                                    label: "D3.JS",
                                    value: "D3.js"
                                    },
                                    {
                                    label: "EXPRESS",
                                    value: "Express"
                                    },
                                    {
                                    label: "GOOGLEMAPS API",
                                    value: "GoogleMaps API"
                                    },
                                    {
                                    label: "HEROKU",
                                    value: "Heroku"
                                    },
                                    {
                                    label: "HTML",
                                    value: "Html"
                                    },
                                    {
                                    label: "JAVA",
                                    value: "Java"
                                    },
                                    {
                                    label: "JAVASCRIPT",
                                    value: "JavaScript"
                                    },
                                    {
                                    label: "JQUERY",
                                    value: "jQuery"
                                    },
                                    {
                                    label: "MANDRILL",
                                    value: "Mandrill"
                                    },
                                    {
                                    label: "MAILCHIMP",
                                    value: "MailChimp"
                                    },
                                    {
                                    label: "MONGODB",
                                    value: "MongoDB"
                                    },
                                    {
                                    label: "NODEJS",
                                    value: "Nodejs"
                                    },
                                    {
                                    label: "PHOTOSHOP",
                                    value: "Photoshop"
                                    },
                                    {
                                    label: "POSTGRES",
                                    value: "Postgres"
                                    },
                                    {
                                    label: "SQLITE DATABASE",
                                    value: "SQLite Database"
                                    },
                                    {
                                    label: "SQUARE API",
                                    value: "Square API"
                                    },
                                    {
                                    label: "TOOKAN API",
                                    value: "Tookan API"
                                    },
                                    {
                                    label: "TWILIO",
                                    value: "Twilio"
                                    },
                                    {
                                    label: "UBUNTU",
                                    value: "Ubuntu"
                                    },
                                    {
                                    label: "WOOCOMMERCE",
                                    value: "WooCommerce"
                                    },
                                    {
                                    label: "WORDPRESS",
                                    value: "Wordpress"
                                    },
                                    {
                                    label: "WPF",
                                    value: "WPF"
                                    }
                                ], portfolioProjects:[
                                    {
                                        title: "PORTFOLIO - ChillyBarrels (WooCommerce)",
                                        images:[
                                            '../images/portifolio/chillybarrels-woocommerce/ageRestriction.png',
                                            '../images/portifolio/chillybarrels-woocommerce/homapage.png',
                                            '../images/portifolio/chillybarrels-woocommerce/serviceCoverageAreasServiceAvailable.png',
                                            '../images/portifolio/chillybarrels-woocommerce/productPage.png'
                                        ],
                                        imageCaptions:[
                                            'ChillyBarrels Age Restriction Page',
                                            'ChillyBarrels Landing Page',
                                            'ChillyBarrels Service Coverage',
                                            'ChillyBarrels Products Page'  
                                        ],
                                        cardHeaders:[
                                            'Age Restriction',
                                            'Landing Page',
                                            'Service Coverage',
                                            'Beer Page'
                                        ],
                                        cardDescriptions:[
                                            'A potential customer to verify that they\'re above 18. They\'re prompted once a day. I created the custom clientside javascript function that checks the cookies and renders the appropriate page.',
                                            'Landing page for the ecommerce site.',
                                            'A user can check where we service the area by either entering their address and clicking the "coverage" button or by clicking the button on it own. I wrote the the javascript code that geocodes a user location and checks whether we have service in their location or not.',
                                            'All of the products page have the same layout that allows for filtering and adding preferred products to the cart.'
                                        ]
                                    },
                                    {
                                        title: "PORTFOLIO - ChillyBarrels-Portal",
                                        images:[
                                            '../images/portifolio/chillybarrels-portal/loginpage.png',
                                            '../images/portifolio/chillybarrels-portal/orders.png',
                                            '../images/portifolio/chillybarrels-portal/createaccount.png'
                                        ],
                                        imageCaptions:[
                                            'ChillyBarrels Portal Login Page',
                                            'ChillyBarrels Portal Orders Page',
                                            'ChillyBarrels Portal Create Account'
                                            
                                        ],
                                        cardHeaders:[
                                            'Login Page',
                                            'Orders Page',
                                            'Create Account'
                                        ],
                                        cardDescriptions:[
                                            'Portal Login page for local stores and ChillyBarrels Admin.',
                                            'All orders made through the site will be loaded on this page and only visible to the local store that they were ordered from. The page auto loads every 3mins with any new order data.',
                                            'Used to create account for either stores or store associates. The dropdown facilitates the distinction'
                                        ]
                                    },
                                    {
                                        title: "PORTFOLIO - ChillyBarrels",
                                        images:[
                                            '../images/portifolio/chillybarrels/homepage.png',
                                            '../images/portifolio/chillybarrels/productspage.png',
                                            '../images/portifolio/chillybarrels/loginpage.png'
                                        ],
                                        imageCaptions:[
                                            'ChillyBarrels Landing Page',
                                            'ChillyBarrels Products Page',
                                            'ChillyBarrels Login Page'
                                            
                                        ],
                                        cardHeaders:[
                                            'Landing Page',
                                            'Beer Page',
                                            'Login Page'
                                        ],
                                        cardDescriptions:[
                                            'Landing page for the ecommerce site.',
                                            'All of the products page have the same layout that allows for filtering and adding preferred products to the cart.',
                                            'Login Page with links to create an account for new customers.'
                                        ]
                                    },
                                    {
                                        title: "PORTFOLIO - REPLICATION TRACE",
                                        images:[
                                            '../images/portifolio/replicationtrace/replication_trace.JPG'
                                        ],
                                        imageCaptions:[
                                            'Replication Trace'
                                        ],
                                        cardHeaders:[
                                            'Replication Trace'
                                        ],
                                        cardDescriptions:[
                                            ' This desktop application was built inorder to trace duplicate records in a table. The application will return all the records that are identical from the table which it attains by individually checking each record in the table.'
                                        ]
                                    },
                                    {
                                        title: "PORTFOLIO - Expense Allocation Metrics",
                                        images:[
                                            '../images/portifolio/expenseallocation/expenseallocation.JPG'
                                        ],
                                        imageCaptions:[
                                            'Expense Allocation Metrics'
                                        ],
                                        cardHeaders:[
                                            'Expense Allocation'
                                        ],
                                        cardDescriptions:[
                                            'The GUI interface provides input for different parameters that allow the user to be able to get calculated total that end up being used for payroll purposes.'
                                        ]
                                    },
                                    {
                                        title: "PORTFOLIO - FPG SALES PORTAL",
                                        images:[
                                            '../images/portifolio/frewprocess/Dashboard2.png',
                                            '../images/portifolio/frewprocess/Dashboard.png',
                                            '../images/portifolio/frewprocess/Sales Goals.png',
                                            '../images/portifolio/frewprocess/Customer Accounts.png',
                                            '../images/portifolio/frewprocess/Prospects Map.png',
                                            '../images/portifolio/frewprocess/Customizable Map.png',
                                            '../images/portifolio/frewprocess/Pentaho.png'
                                        ],
                                        imageCaptions:[
                                            'Dashboard page',
                                            'Dashboard page',
                                            'Sales goals page',
                                            'Customer Accounts page',
                                            'Prospects Map page',
                                            'Customizable Map page',
                                            'Pentaho page'
                                        ],
                                        cardHeaders:[
                                            'Dashboard Page',
                                            'Dashboard page',
                                            'Sales Goal Page',
                                            'Customer Accounts Page',
                                            'Prospects Map Page',
                                            'Prospects Maps Page (continued)',
                                            'Pentaho Page'
                                        ],
                                        cardDescriptions:[
                                            'When an employee signs into the portal they land on to this dashboard page that gives them an high level look at the company\'s progress categorized by certain business documents. There is also a filter functionality that enables a historical data search.',
                                            'The graphs have interactive functionality that enables a user to click the original graph (from the previous page) and be presented with another graph that has more interactive features to respond to clicks and mouseover hovers.',
                                            'This page allows a user to create sales target goals based on different sales territories and also to filter and search those goals.',
                                            'The Customer Accounts page lists all customers that the company has and provides options to select if a customer is a sales target for a particular period or not. It also provides searching and sorting capabilities.',
                                            'The Prospects map page displays plotted customers by different categorization( target account, key accounts, and historic customers and others) which ties back to sales effort roles assigned on the Customer Accounts page. This page leverages to googleMaps API, Ajax, jQuery and javascript to perform its core functions. On a customer plotted pin a user is able to see the customer\'s past orders, past paid invoices, and furthermore click the pin for a more detailed look. The right fly out enables filtering by date, classifications, categories, account type, geocoding quality, and by dynamically adding some grouped filters. Last but not least a user can short list the customers that they want to focus on by doubling clicking on a customer plotted pin and by doing so add them to the "Added Partners" cache.',
                                            'The Customizable Map is were the "Added Partners" from the Prospects Map are displayed. On this page a user can search a customer\'s address straight on to the map and can add all those plotted points to a print cache.',
                                            'This page provides an on-click link to Pentaho reports that are ran and hosted on the Pentaho Bi Server. I also had the task of creating and designing most of those reports(which included financial reports and an inclusive revenue and margin report that leveraged the company\'s ERP system workflow).'
                                        ]
                                    },
                                    {
                                        title: "PORTFOLIO - GASCO SALES PORTAL",
                                        images:[
                                            '../images/portifolio/gasco/Dashboard2.png',
                                            '../images/portifolio/gasco/Dashboard.png',
                                            '../images/portifolio/gasco/Sales Goals.png',
                                            '../images/portifolio/gasco/Customer Accounts.png',
                                            '../images/portifolio/gasco/Prospects Map.png',
                                            '../images/portifolio/gasco/Customizable Map.png',
                                            '../images/portifolio/gasco/Pentaho.png'
                                        ],
                                        imageCaptions:[
                                            'Dashboard page',
                                            'Dashboard page',
                                            'Sales goals page',
                                            'Customer Accounts page',
                                            'Prospects Map page',
                                            'Customizable Map page',
                                            'Pentaho page'
                                        ],
                                        cardHeaders:[
                                            'Dashboard Page',
                                            'Dashboard page',
                                            'Sales Goal Page',
                                            'Customer Accounts Page',
                                            'Prospects Map Page',
                                            'Prospects Maps Page (continued)',
                                            'Pentaho Page'
                                        ],
                                        cardDescriptions:[
                                            'When an employee signs into the portal they land on to this dashboard page that gives them an high level look at the company\'s progress categorized by certain business documents. There is also a filter functionality that enables a historical data search.',
                                            'The graphs have interactive functionality that enables a user to click the original graph (from the previous page) and be presented with another graph that has more interactive features to respond to clicks and mouseover hovers.',
                                            'This page allows a user to create sales target goals based on different sales territories and also to filter and search those goals.',
                                            'The Customer Accounts page lists all customers that the company has and provides options to select if a customer is a sales target for a particular period or not. It also provides searching and sorting capabilities.',
                                            'The Prospects map page displays plotted customers by different categorization( target account, key accounts, and historic customers and others) which ties back to sales effort roles assigned on the Customer Accounts page. This page leverages to googleMaps API, Ajax, jQuery and javascript to perform its core functions. On a customer plotted pin a user is able to see the customer\'s past orders, past paid invoices, and furthermore click the pin for a more detailed look. The right fly out enables filtering by date, classifications, categories, account type, geocoding quality, and by dynamically adding some grouped filters. Last but not least a user can short list the customers that they want to focus on by doubling clicking on a customer plotted pin and by doing so add them to the "Added Partners" cache.',
                                            'The Customizable Map is were the "Added Partners" from the Prospects Map are displayed. On this page a user can search a customer\'s address straight on to the map and can add all those plotted points to a print cache.',
                                            'This page provides an on-click link to Pentaho reports that are ran and hosted on the Pentaho Bi Server. I also had the task of creating and designing most of those reports(which included financial reports and an inclusive revenue and margin report that leveraged the company\'s ERP system workflow).'
                                        ]
                                    },
                                    {
                                        title: "PORTFOLIO - ADB Delivery Services",
                                        images:[
                                            '../images/portifolio/adb/adb.png',
                                            '../images/portifolio/adb/adbdeliveryservice.png',
                                            '../images/portifolio/adb/adbgarageservice.png',
                                            '../images/portifolio/adb/adbmailinglist.png',
                                            '../images/portifolio/adb/adbreview.png'
                                        ],
                                        imageCaptions:[
                                            'Adb Delivery Service Home Page',
                                            'Adb Delivery Service - Delivery Service Scheduler',
                                            'Adb Delivery Service - Garage Cleaning/Hauling Service Scheduler',
                                            'Adb Delivery Service - Subscribe to mailing list Section',
                                            'Adb Delivery Service - Review Section'
                                        ],
                                        cardHeaders:[
                                            'Home Page',
                                            'Delivery Service',
                                            'Garage Cleaning/Hauling Service',
                                            'Subscribe to mailing list',
                                            'Reviews'
                                        ],
                                        cardDescriptions:[
                                            'The homepage allows customers to schedule a service, subscribe to the mailing list and view past reviews or leave thier own review.',
                                            'When a customer wants to schedule an appointment they have to fill the above form. After filling the form they will recieve and email that includes a quoted price. They can make a payment once the appointment has been scheduled depending on their prior selected payment type.',
                                            'Customers are able to schedule garage cleaning or hauling service. Unlike the delivery service they can not make a payment up until a member from the company asseses how much cleaning or hauling is actually involved.',
                                            'Full name and email inputs for customer willing to subscribe to the mailing list. Customers that have already subscribed will be notified if they try to resubscribe.',
                                            'Customers are able to leave reviews directly on the website for different types of services.'
                                        ]
                                    },
                                    {
                                        title: 'PORTFOLIO - GERFUSA',
                                        images:[
                                            '../images/portifolio/gerfusa/homepage.png',
                                            '../images/portifolio/gerfusa/homepage2.png',
                                            '../images/portifolio/gerfusa/services.png',
                                             '../images/portifolio/gerfusa/login.png',
                                             '../images/portifolio/gerfusa/groceries.png',
                                             '../images/portifolio/gerfusa/groceries-store.png',
                                              '../images/portifolio/gerfusa/errands.png',
                                              '../images/portifolio/gerfusa/fastfood.png',
                                              '../images/portifolio/gerfusa/servicelocations.png',
                                              '../images/portifolio/gerfusa/contactus.png'
                                        ],
                                        imageCaptions:[
                                            'GERFUSA home page',
                                            'GERFUSA how it works',
                                            'GERFUSA Services information',
                                            'GERFUSA Login PAGE',
                                            'GERFUSA Groceries Order page',
                                            'GERFUSA Groceries Order page',
                                            'GERFUSA Errands page',
                                            'GERFUSA Login page',
                                            'GERFUSA Service locations page',
                                            'GERFUSA Contact us'
                                        ],
                                        cardHeaders:[
                                            'Home Page',
                                            'Home page (continued) - HOW IT WORKS',
                                            'Home page (continued) - SERVICES',
                                            'Login Page',
                                            'Groceries Page',
                                            'Groceries Page (continued)',
                                            'Errands Page',
                                            'Fast Food Page',
                                            'Service Location Page',
                                            'Contact Page'
                                        ],
                                        cardDescriptions:[
                                            'Full window browser width home page look that gives users a peak at what the company does.',
                                            'Clicking the "HOW IT WORKS" button shows the ordering a service process from start to delivery.',
                                            'Clicking on one of the navigation links opens up a detailed description of that service. In the above image there is a detailed description and estimated pricing for Grocery deliveries, Errands service, and Fastfood deliveries.',
                                            'The login page that has an option to sign in with Facebook, Google, and Twitter. Users can also use their GERFUSA created account information if they created their account from the "SIGN UP" page.',
                                            'After logging in a user is redirected to the groceries page where they can start scheduling a delivery by clicking on a chosen store.',
                                            'When a user clicks on a chosen store there are shown options the should assist them in completing their order. Depending with the selected store some options will be available or not.',
                                            'Clicking on the Errand menu takes you to the errands page where they can start scheduling a delivery by clicking on a chosen errand category.',
                                            'Clicking on the Fastfood menu takes you to the errands page where they can start scheduling a delivery by clicking on a chosen fastfood restaurant.',
                                            'Google Maps API powered page that detects a users location and shows them if there is service in their area or not.',
                                            'The contact page provides an option for users to submit information using our form based on a couple of categories. Alternatively they can just see displayed contact information.'
                                   
                                        ]
                                    },
                                    {
                                        title: 'PORTFOLIO - MuMoAfruika',
                                        images:[
                                            '../images/portifolio/mumoafruika/usertypes.png',
                                            '../images/portifolio/mumoafruika/emailfill.png',
                                            '../images/portifolio/mumoafruika/subscription.png'

                                        ],
                                        imageCaptions:[
                                           'MuMoAfruika  user types',
                                           'MuMoAfruika Email Subscription',
                                           'MuMoAfruika Email Subscription Confirmation'
                                        ],
                                        cardHeaders:[
                                            'User Types',
                                            'Email Subscription Registration',
                                            'Email Subscription Registration (continued)'
                                        ],
                                        cardDescriptions:[
                                            'Visitors are prompted to select one of the three user types since these are crucial in defining user roles in the upcoming application.',
                                            'They then should enter a valid email for them to be able to subscribe to the email blast. An email validation is in place on the text field.',
                                            'After hitting submit a status confirmation dialog pops up.'
                                        ]
                                    },
                                    {
                                        title: 'PORTFOLIO - MuMoAfruika Platform UI',
                                        images:[
                                            '../images/portifolio/mumoafruikaui/mumoafruikaui.png',
                                            '../images/portifolio/mumoafruikaui/mumoafruikamovies.png',
                                            '../images/portifolio/mumoafruikaui/mumoafruikavideos.png',
                                        ],
                                        imageCaptions:[
                                            'MuMoAfruika  user types',
                                            'MuMoAfruika  Movies Page',
                                           'MuMoAfruika Videos Page'
                                        ],
                                        cardHeaders:[
                                            'Music Page',
                                            'Movies Page',
                                            'Videos Page'
                                        ],
                                        cardDescriptions:[
                                            'This will be the homepage were users are mostly likely to be automatically re-routed to. The design will be the basis for the whole WEB platform. It directly shows the features that make us distinct and at the same time provide the user with a great user experience.',
                                            'The MOVIES page will be very similar to the MUSIC page because on both of these pages were are trying to showcase the different content that is produced from all African countries.',
                                            'The VIDEOS page differs from the first two page because in its default layout is doesn\'t present the country filter. We feel that since these videos maybe random and do not fit in the MOVIES & MUSIC professional or aspiring categories there isn\'t a need to present the country filter by default.'                               
                                        ]
                                    },
                                    {
                                        title: 'PORTFOLIO - POTENCITY',
                                        images:[
                                          '../images/portifolio/potencity/homepage.png',
                                          '../images/portifolio/potencity/whatwedo.png',
                                          '../images/portifolio/potencity/gottalent.png',
                                          '../images/portifolio/potencity/findtalent.png',
                                          '../images/portifolio/potencity/ourpartners.png',
                                          '../images/portifolio/potencity/joinourmailinglist.png',
                                          '../images/portifolio/potencity/aboutpage.png',
                                          '../images/portifolio/potencity/signuppage.png',
                                          '../images/portifolio/potencity/loginpage.png'
                                        ],
                                        imageCaptions:[
                                          'Home Page',
                                          'What We Do',
                                          'Got Talent',
                                          'Find Talent',
                                          'Our Partners',
                                          'Join Our mailing list',
                                          'About Page',
                                          'Signup Page',
                                          'Login Page'
                                        ],
                                        cardHeaders:[
                                          'Home Page',
                                          'Home Page (continued)',
                                          'Home Page (continued)',
                                          'Home Page (continued)',
                                          'Home Page (continued)',
                                          'Home Page (continued)',
                                          'About Page',
                                          'Signup Page',
                                          'Login Page'
                                        ],
                                        cardDescriptions:[
                                        'Landing Page that show the description of what Potencity offers.',
                                        'Description of what Potencity does. Buttons redirect to named links after the user signs in.',
                                        'Perks of signing up for Potencity for those looking for a growing opportunity.',
                                        'Perks of signing up for Firms that are looking for a diverse pool of dedicated employees.',
                                        'Some of the company\'s brand partners that aide to their business advantage.',
                                        'Staying connected with updates and news from Potencity.',
                                        'Potencity provides something unique for both employees and firms. The elevation makes both entities realize their Potencity.',
                                        'Signup Page for both talent and firms.',
                                        'Multiple ways to login and harness the power and advantages of Potencity.'
                                        ]                                        

                                    }
                                ]
                        };
    return portfolio;
};
module.exports.getPortfolio = getPortfolio;
