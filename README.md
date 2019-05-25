# HCI-2019-Team-PTE
A hign fidelity prototype for Human Computer Interaction Report 3
<h3>Brief</h3>
<p>This is an application prototype called Foundit, designed to help people find items that are unknown for name or unknown for where-to-buy.</p>
<p>The application is written in HTML, CSS and JavaScript, because it was originally designed for mobile phones, and because of the development time limitation, it only adapts to the resolution configuration of the mobile phone. <strong>For the best experience, please view the app in the resolution of iPhone 6/7/8.</strong> You can also check our <a href="http://wallygood.net/prototype/login.html">online example</a> at one of the team member's personal domain (in the resolution of iPhone 6/7/8, please).</p>

<p>To run the application, you need to access the login.html for start. This application does not have a backend and is only used for testing on a single machine. So, it does not save the password. The app only saves the last registered user name. It only validates the password input consistency as a process. Only the user name is verified when logging in. This application mainly uses localstorage as the way of data storage to simulate database, and uses data.js as the pre-set data for initialization. The app resets the data each time a new user is registered, to keep the same experience between different testers. This app uses localstorage to store the two most recent pictures from two differentsearch modes, drawing search and image search, to give users the highest possible fidelity test experience. This also has the side effect that <strong> the application must be loaded on the virtual server to use the image search function, otherwise image search function will not be available due to image storage errors.</strong> At the same time, because the "my comments" function in history page is not in the main evaluation task, to speed up the developing and evaluation, it does not bind the correct hyper-link.</p>


<h3>3rd party plugins</h3>
<p>The app uses <a href="http://jquery.com/">jQuery</a> as the main plugin. Drawing and cropping features use third-party plugins, drawing uses 2 plugin, including <a href="https://github.com/Leimi/drawingboard.js">drawingboard.js</a> and <a href="https://github.com/mattjmattj/simple-undo">Simple-undo</a> and crop function use plugin <a href="https://github.com/fengyuanchen/jquery-cropper">jquery-cropper</a> and <a href="https://github.com/fengyuanchen/cropperjs">cropper</a>.</p>



This app uses public image resources, reference listed below:
<h3>References</h3>

Batholith. (2010). Hairdryer 20101109. [image] Retrived from https://commons.wikimedia.org/wiki/File:Hairdryer_20101109.jpg Wikimedia Commons

Bru-nO. (2018).clock-pocket-watch-movement. [image] Retrived from  https://pixabay.com/photos/clock-pocket-watch-movement-3179167/ CC0

Capri23auto. (2017). basketball-ball-ball-game-basket. [image] Retrived from https://pixabay.com/photos/basketball-ball-ball-game-basket-2724391/ CC0

GmbH U. (2017). Spalding Basketball. [image] Retrived from https://de.m.wikipedia.org/wiki/Datei:Spalding_Basketball.jpg Wikimedia Commons

Phrontis. (2010). AEG Foen Nr72355 03 mod03 res [image] Retrived from https://pl.wikipedia.org/wiki/Plik:AEG_Foen_Nr72355_03_mod03_res.jpg Wikimedia Commons

pngimg.com. (n.d.). Grey Shirt 2. [image] Retrived from http://pngimg.com/download/5447 Creative Commons 4.0 BY-NC 

United States Air Force (n.d.). Air Force Medical Service Photos. [image] Retrived from https://www.airforcemedicine.af.mil/News/Photos/igphoto/2000126444/ 

United States Air Force (n.d.). Air Force Sports seeks Airmen basketball players. [image] Retrived from https://www.af.mil/News/Article-Display/Article/1779886/air-force-sports-seeks-airmen-basketball-players/

Vasnetsov V. (2018). fall-blowing-street-leaves-blower. [image] Retrived from [image] Retrived from https://pixabay.com/photos/fall-blowing-street-leaves-blower-3829152/ CC0

Werk E. (2005). Grey Shirt 3. [image] Retrived from https://de.m.wikipedia.org/wiki/Datei:T-shirt.jpg Wikimedia Commons
